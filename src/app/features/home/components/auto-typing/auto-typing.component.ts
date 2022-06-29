import {
  AfterViewInit,
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-auto-typing',
  templateUrl: './auto-typing.component.html',
  styleUrls: ['./auto-typing.component.scss'],
})
export class AutoTypingComponent implements OnInit, AfterViewInit, OnDestroy {
  private isTypewriterLoopActive: boolean = false;

  private typeDelay: number = 500;
  private deleteDelay: number = 1800;
  private textOptions: string[] = [];

  public startText: string = '';
  public optionText: string = '';

  @Input()
  public set options(value: string | string[]) {
    this.textOptions = typeof value === 'string' ? [value] : value;
  }
  @Input() public text: string = '';
  @Input() public initialDelay: number = 2000;
  @Input() public typeSpeed: number = 100;
  @Input() public deleteSpeed: number = 70;

  @HostBinding('class')
  @Input()
  public class: string = '';

  constructor() {}

  ngOnInit(): void {
    this.isTypewriterLoopActive = this.hasTextOptions();
  }

  ngOnDestroy(): void {
    this.isTypewriterLoopActive = false;
  }

  async ngAfterViewInit(): Promise<void> {
    await this.waitForMs(this.initialDelay);

    await this.typeStartText(this.text);

    while (this.isTypewriterLoopActive) {
      for (const option of this.textOptions) {
        await this.typeOptionText(option);
        await this.deleteOptionText(option);
      }
    }
  }

  private hasTextOptions(): boolean {
    return this.textOptions.length > 0;
  }

  private async typeStartText(text: string): Promise<void> {
    if (!text) return;

    for (const letter of text) {
      this.startText += letter;
      await this.waitForMs(this.typeSpeed);
    }
  }

  private async typeOptionText(text: string): Promise<void> {
    for (const letter of text) {
      this.optionText += letter;
      await this.waitForMs(this.typeSpeed);
    }

    await this.waitForMs(this.deleteDelay);
  }

  private async deleteOptionText(text: string): Promise<void> {
    for (let index = 0; index < text.length; index++) {
      this.optionText = this.optionText.slice(0, -1);
      await this.waitForMs(this.deleteSpeed);
    }

    await this.waitForMs(this.typeDelay);
  }

  private waitForMs(delayMs: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, delayMs));
  }
}

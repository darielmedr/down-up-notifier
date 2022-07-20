import { GetClassNameByViewModePipe } from './get-class-name-by-view-mode.pipe';
import { NavbarLinksMode } from 'src/app/features/navbar/models/navbar-links-mode.model';

describe('GetClassNameByViewModePipe', () => {
  let pipe: GetClassNameByViewModePipe;

  const classNameByMode: Record<NavbarLinksMode, string> = {
    default: 'navbar-links',
    menu: 'menu',
  };

  beforeEach(() => {
    pipe = new GetClassNameByViewModePipe();
  });

  it('should create an instance', () => {
    const pipe = new GetClassNameByViewModePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return empty string when mode is not defined', () => {
    const mode = 'unknown-mock-mode' as any;
    const expectedValue = '';

    const result = pipe.transform(mode);

    expect(result).toEqual(expectedValue);
  });

  describe('maps a view mode to class name', () => {
    it('should return "navbar-links" when mode is "default"', () => {
      const mode = 'default';
      const expectedValue = 'navbar-links';

      const result = pipe.transform(mode);

      expect(result).toEqual(expectedValue);
    });

    it('should return "menu" when mode is "menu"', () => {
      const mode = 'menu';
      const expectedValue = 'menu';

      const result = pipe.transform(mode);

      expect(result).toEqual(expectedValue);
    });
  });
});

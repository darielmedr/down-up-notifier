import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/modules/material/material.module';
import { RouterModule } from '@angular/router';

const components: any[] = [];

@NgModule({
  declarations: [...components],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [...components],
})
export class CoreModule {}

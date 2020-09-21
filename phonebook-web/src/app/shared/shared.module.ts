import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { SiteTitleComponent } from './components/site-title/site-title.component';
import { SiteLayoutComponent } from './components/site-layout/site-layout.component';
import { SiteFooterComponent } from './components/site-footer/site-footer.component';



@NgModule({
  declarations: [SiteHeaderComponent, SiteTitleComponent, SiteLayoutComponent, SiteFooterComponent,],
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ],
  exports: [
    SiteLayoutComponent,
  ]
})
export class SharedModule { }

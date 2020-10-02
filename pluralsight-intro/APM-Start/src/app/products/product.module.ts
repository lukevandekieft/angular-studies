import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-spaces.pipe';
import { StarComponent } from '../shared/star/star.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailGuard } from './product-detail/product-detail.guard';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent },
      { path: 'products/:productId', canActivate: [ProductDetailGuard], component: ProductDetailComponent }
    ])
  ]
})
export class ProductModule { }

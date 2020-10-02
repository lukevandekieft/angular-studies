import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

import { IProduct } from '../product';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail';
  product: IProduct;
  errorMessage: string;

  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit(): void {
    let productId = +this.route.snapshot.paramMap.get('productId');
    this.pageTitle += `: ${productId}`;

    this.productService.getProducts().subscribe({
      next: arbitraryVariableName => {
        let filteredProducts = arbitraryVariableName.filter(productInstance => productInstance.productId == productId);
        this.product = filteredProducts[0];
      },
      error: err => this.errorMessage = err
    });
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}

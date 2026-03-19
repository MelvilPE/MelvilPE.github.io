import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private slides = [
    { src: "/images/gallery_0.png", caption: "Outdated version" },
    { src: "/images/gallery_1.png", caption: "Revanced version" },
    { src: "/images/gallery_2.png", caption: "Revanced version" },
    { src: "/images/gallery_3.png", caption: "Revanced version" }
  ];

  public slideIndex = 0;

  public isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  public getSlideSRC() {
    return this.slides[this.slideIndex].src;
  }

  public getSlideCaption() {
    return this.slides[this.slideIndex].caption;
  }

  public prevSlide() {
    if (this.slideIndex === 0) {
      this.slideIndex = this.slides.length - 1
    } else {
      this.slideIndex -= 1;
    }
  }

  public nextSlide() {
    if (this.slideIndex === this.slides.length - 1) {
      this.slideIndex = 0;
    } else {
      this.slideIndex += 1;
    }
  }
}

class Tabs {
  constructor() {
    this.tabs = document.querySelectorAll('.tabs__item');
    this.tabPanels = document.querySelectorAll('.tab');
    this.currentIdx = 0;
  }

  init() {
    this.display();
    this.setupEventListeners();
  }

  display() {
    if (!this.tabPanels.length) return;
    
    this.tabPanels.forEach(tab => tab.style.display = 'none');
    this.tabPanels[0].style.display = 'block';
    this.tabPanels[0].classList.add('active');
    this.tabs[0].classList.add('active');
  }

  setupEventListeners() {
    if (!this.tabs.length) return;

    this.tabs.forEach((tab, idx) => {
      tab.addEventListener('click', () => this.switchTab(idx));
    });
  }

  switchTab(newIdx) {
    if (this.currentIdx === newIdx) return;

    // Remove active state from previous tab
    this.tabPanels[this.currentIdx].style.display = 'none';
    this.tabPanels[this.currentIdx].classList.remove('active');
    this.tabs[this.currentIdx].classList.remove('active');

    // Add active state to new tab
    this.tabPanels[newIdx].style.display = 'block';
    this.tabPanels[newIdx].classList.add('active');
    this.tabs[newIdx].classList.add('active');

    this.currentIdx = newIdx;
  }
}

class Preview {
  constructor() {
    this.images = document.querySelectorAll('.preview__img');
    this.previews = document.querySelectorAll('.preview');
    this.currentIdx = 0;
  }

  init() {
    this.display();
    this.setupEventListeners();
  }

  display() {
    if (!this.images.length) return;
    
    this.images.forEach(img => img.style.display = 'none');
    this.images[0].style.display = 'block';
  }

  setupEventListeners() {
    if (!this.previews.length) return;

    this.previews.forEach((preview, idx) => {
      preview.addEventListener('mouseenter', () => this.switchImage(idx));
    });
  }

  switchImage(newIdx) {
    if (this.currentIdx === newIdx) return;

    this.images[this.currentIdx].style.display = 'none';
    this.images[newIdx].style.display = 'block';
    this.currentIdx = newIdx;
  }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  const tabs = new Tabs();
  const preview = new Preview();
  const wow = new WOW({ animateClass: 'fade-in' });

  tabs.init();
  preview.init();
  wow.init();
});

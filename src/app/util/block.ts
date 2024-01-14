export class Block {
  private html: string;
  private title: string;
  private content: string;
  private image: string;

  constructor(title: string, content: string, image: string) {
    this.title = title.replace(/\n/g, '<br>');
    this.content = content.replace(/\n/g, '<br><br>');
    this.image = image;
    this.html = '';
  }

  assemble(): string {
    // Start of the row
    this.html += `<div class="row">`;

    // Title
    const titleStyle = 'text-align: center; margin-bottom: 20px;';
    this.html += `
        <div class="col-12 order-1 order-lg-1">
            <h2 class="block-title" style="${titleStyle}">${this.title}</h2>
        </div>
    `;

    const contentStyle =
      'text-align: justify; margin-bottom: 20px; font-size: 18px; font-line-height: 0px;';

    // Image
    if (this.image) {
      let style: string;

      // Determine the style based on image dimensions
      const img = new Image();
      img.src = this.image;
      if (img.height > img.width) {
        style = `width: ${
          90 * (img.width / img.height) * (img.width / img.height)
        }%; height: 100%; border-radius: 10px;`;
      } else {
        style = 'width: 90%; height: 100%; border-radius: 10px;';
      }

      this.html += `
            <div class="col-12 col-lg-6 order-2 order-lg-2">
                <img class="block-image" src="${this.image}" style="${style}">
            </div>
        `;
      // Content
      this.html += `
            <div class="col-12 col-lg-6 order-3 order-lg-1 d-flex align-items-center">
                <p class="block-content" style="${contentStyle}">${this.content}</p>
            </div>
        `;
    } else {
      // Content
      this.html += `
            <div class="col-12 order-2 order-lg-1">
                <p class="block-content" style="${contentStyle}">${this.content}</p>
            </div>
        `;
    }

    // End of the row
    this.html += `</div>`;

    // Return
    return this.html;
  }
}

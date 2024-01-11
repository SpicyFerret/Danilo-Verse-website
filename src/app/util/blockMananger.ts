import { Block } from "./block";

export class BlockMananger {
    private blocks: Block[] = [];

    addBlock(title: string, content: string, image: string): void;
    addBlock(titleOrBlock: string | Block, content?: string, image?: string): void {
        if (typeof titleOrBlock === 'string') {
            // If the first argument is a string, we assume that all three arguments are provided
            this.blocks.push(new Block(titleOrBlock, content!, image!));
        } else {
            // If the first argument is not a string, we assume it's a Block
            this.blocks.push(titleOrBlock);
        }
    }

    assemble() : string {
        var assembly = ""; 
        assembly += `<div class="container">`;
        this.blocks.forEach(block => {
            assembly += `<div class="row container content-section">`;
            assembly += block.assemble();
            assembly += `</div>`;
        });
        assembly += `</div>`;

        return assembly;
    }
}
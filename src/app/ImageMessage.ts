import { Message } from './Message';

export class ImageMessage extends Message {
    constructor(private url: string, sender: string | null) {
        super(sender);
    }

    render(): string {
        return `<a target='_blank' href='${this.url}'><img class='image-message' src='${this.url}'></img></a>`;
    }
}

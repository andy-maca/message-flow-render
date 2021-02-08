import { Message } from './Message';

export class TextMessage extends Message {
    constructor(private text: string, sender: string | null) {
        super(sender);
    }

    render(): string {
        return `<span class='text-message'>${this.text}</span>`;
    }
}

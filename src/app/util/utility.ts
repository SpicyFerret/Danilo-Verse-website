export class Utility {
    public static readonly BUTTON_ACTIVE_BG_COLOR = '#503887';
    public static readonly BUTTON_ACTIVE_TEXT_COLOR = '#FFFFFF';
    public static readonly BUTTON_INACTIVE_BG_COLOR = '#00000000';
    public static readonly BUTTON_INACTIVE_TEXT_COLOR = '#503887';
    public static readonly BUTTON_HOVER_BG_COLOR = '#00000000';
    public static readonly BUTTON_HOVER_TEXT_COLOR = '#342558';

    public static getWhatsAppLink(phoneNumber: string, message: string): string {
        return `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;
    }
}
export class ProjectSettings {
    email: string;
    language: string;
    timezone: string;
    communication: {
        email: boolean,
        sms: boolean,
        phone: boolean
    };
}

export interface Communication {
    id: string;  // hasznal
    status: string;  // preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
    category: string[];  // alert, notification, reminder, instruction
    priority: number;  // hasznal
    medium: string[];  // hasznal
    subject: string;  // hasznal
    topic: string;  // hasznal
    sent: Date;  // hasznal
    received: Date;  // hasznal
    recipient: string[];  // hasznal
    sender: string[];  // hasznal
    identifier?: string[];
    instantiatesCanonical?: undefined[];
    instantiatesUri?: undefined[];
    basedOn?: undefined[];
    partOf?: undefined[];
    inResponseTo?: undefined[];
    statusReason?: undefined;
    about?: undefined[];
    encounter?: undefined;
    reasonCode?: undefined[];
    reasonReference?: undefined[];
    payload?: undefined[];
    note?: undefined[];
}
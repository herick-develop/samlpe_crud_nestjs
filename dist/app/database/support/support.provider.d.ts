import { DataSource } from 'typeorm';
export declare const SupportProviders: {
    provide: string;
    useFactory: () => Promise<DataSource>;
}[];

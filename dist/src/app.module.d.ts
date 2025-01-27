import { MiddlewareConsumer } from '@nestjs/common';
import { Connection } from 'typeorm';
export declare class AppModule {
    private readonly connection;
    constructor(connection: Connection);
    configure(consumer: MiddlewareConsumer): void;
}

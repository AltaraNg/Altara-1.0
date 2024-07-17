<?php
return [

    /**
     * Public Key From Paystack Dashboard
     *
     */
    'publicKey' => getenv('PAYSTACK_PUBLIC'),

    /**
     * Secret Key From Paystack Dashboard
     *
     */
    'secretKey' => getenv('PAYSTACK_SECRET'),

    /**
     * Paystack Payment URL
     *
     */
    'paymentUrl' => getenv('PAYSTACK_PAYMENT_URL'),

    /**
     * Optional email address of the merchant
     *
     */
    'merchantEmail' => getenv('MERCHANT_EMAIL', 'accounts@altaracredit.com'),

];

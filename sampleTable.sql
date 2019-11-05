create table `customer_management_histories`
(
    `id`          int unsigned not null auto_increment primary key,
    `user_id`     int unsigned not null,
    `customer_id` int unsigned not null,
    `from`        datetime     not null,
    `to`          datetime     not null,
    `created_at`  timestamp    null,
    `updated_at`  timestamp    null
)
    default character set utf8mb4
    collate 'utf8mb4_unicode_ci';

alter table `customer_management_histories`
    add index `customer_management_histories_user_id_index` (`user_id`);

alter table `customer_management_histories`
    add index `customer_management_histories_customer_id_index` (`customer_id`);

alter table `customer_management_histories`
    add constraint `customer_management_histories_user_id_foreign`
        foreign key (`user_id`) references `users` (`id`);

alter table `customer_management_histories`
    add constraint `customer_management_histories_customer_id_foreign`
        foreign key (`customer_id`) references `customers` (`id`);

alter table `customers`
    add `managed_by` int unsigned null after `user_id`;

alter table `customers`
    add index `customers_managed_by_index` (`managed_by`);

alter table `customers`
    add constraint `customers_managed_by_foreign` foreign key (`managed_by`) references `users` (`id`);

/*--------------------------------------------------------------------------------------------------------------------*/
/*-----------------------------------------for the order status feature - Table changes------------------------------*/
/*--------------------------------------------------------------------------------------------------------------------*/

create table `status`
(
    `id`   int unsigned not null auto_increment primary key,
    `name` varchar(191) not null
)
    default character set utf8mb4
    collate 'utf8mb4_unicode_ci';

insert into status (`name`)
values ('ok'),
       ('returned'),
       ('repossessed');

# set GLOBAL sql_mode = " ";

ALTER TABLE orders
    CHANGE `return` `status_id` tinyint(1) NULL default 1;

UPDATE orders
SET orders.status_id = 1;

/*migrations effected on 3/11/2019*/
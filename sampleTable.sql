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
    add `managed_by` int unsigned null;

alter table `customers`
    add index `customers_managed_by_index` (`managed_by`);
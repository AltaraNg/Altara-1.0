use altaraone;

create table `brands`
(
    `id`         int unsigned not null auto_increment primary key,
    `name`       varchar(191) not null,
    `created_at` timestamp    null,
    `updated_at` timestamp    null
) default character
      set utf8mb4
  collate 'utf8mb4_unicode_ci'
  engine = InnoDB;

alter table `brands`
    add unique `brands_name_unique` (`name`);



create table `categories`
(
    `id`         int unsigned not null auto_increment primary key,
    `name`       varchar(191) not null,
    `created_at` timestamp    null,
    `updated_at` timestamp    null
) default character set utf8mb4
  collate 'utf8mb4_unicode_ci'
  engine = InnoDB;

alter table `categories`
    add unique `categories_name_unique` (`name`);



create table `products`
(
    `id`           int unsigned not null auto_increment primary key,
    `name`         varchar(191) not null,
    `brand_id`     int unsigned null,
    `category_id`  int unsigned null,
    `retail_price` varchar(191) not null,
    `features`     varchar(191) not null,
    `img_url`      varchar(191) not null,
    `popularity`   varchar(191) not null,
    `type`         varchar(191) not null,
    `is_active`    tinyint(1)   not null,
    `user_id`      int unsigned null,
    `created_at`   timestamp    null,
    `updated_at`   timestamp    null
) default character set utf8mb4
  collate 'utf8mb4_unicode_ci'
  engine = InnoDB;

alter table `products`
    add index `products_brand_id_index` (`brand_id`);

alter table `products`
    add index `products_category_id_index` (`category_id`);

alter table `products`
    add index `products_user_id_index` (`user_id`);

alter table `products`
    add constraint `products_user_id_foreign` foreign key (`user_id`) references `users` (`id`);

alter table `products`
    add constraint `products_brand_id_foreign` foreign key (`brand_id`) references `brands` (`id`);

alter table `products`
    add constraint `products_category_id_foreign` foreign key (`category_id`) references `categories` (`id`);
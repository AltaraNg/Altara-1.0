SELECT
    orders.id,
    (
        COALESCE(repayment_formal.`1st_pay`, 0) + COALESCE(repayment_formal.`2nd_pay`, 0) + COALESCE(repayment_formal.`3rd_pay`, 0) + COALESCE(repayment_formal.`4th_pay`, 0) + COALESCE(repayment_formal.`5th_pay`, 0) + COALESCE(repayment_formal.`6th_pay`, 0)
    ) AS total,
    orders.product_price,
    orders.repayment_amount,
    dd_data.salary_suggesteddeduction_date1,
    dd_data.salary_suggesteddeduction_date2,
    dd_data.salary_suggesteddeduction_date3,
    DATE_ADD(
        orders.order_date,
        INTERVAL 28 DAY
    ) AS FIRST,
    DATE_ADD(
        orders.order_date,
        INTERVAL 56 DAY
    ) AS SECOND,
    DATE_ADD(
        orders.order_date,
        INTERVAL 84 DAY
    ) AS third,
    DATE_ADD(
        orders.order_date,
        INTERVAL 112 DAY
    ) AS fourth,
    DATE_ADD(
        orders.order_date,
        INTERVAL 140 DAY
    ) AS fifth,
    DATE_ADD(
        orders.order_date,
        INTERVAL 168 DAY
    ) AS sixth
FROM
    `orders`
JOIN repayment_formal ON repayment_formal.repayment_id = orders.id
JOIN dd_data ON dd_data.order_id = orders.id
WHERE
    (orders.discount_id = 8) AND(
        (
            COALESCE(repayment_formal.`1st_pay`, 0) + COALESCE(repayment_formal.`2nd_pay`, 0) + COALESCE(repayment_formal.`3rd_pay`, 0) + COALESCE(repayment_formal.`4th_pay`, 0) + COALESCE(repayment_formal.`5th_pay`, 0) + COALESCE(repayment_formal.`6th_pay`, 0)
        ) < orders.product_price
    ) AND(
        (
            DATE_ADD(
                orders.order_date,
                INTERVAL 28 DAY
            ) = CURDATE() || DATE_ADD(
                orders.order_date,
                INTERVAL 56 DAY
            ) = CURDATE() || DATE_ADD(
                orders.order_date,
                INTERVAL 84 DAY
            ) = CURDATE() || DATE_ADD(
                orders.order_date,
                INTERVAL 112 DAY
            ) = CURDATE() || DATE_ADD(
                orders.order_date,
                INTERVAL 140 DAY
            ) = CURDATE() || DATE_ADD(
                orders.order_date,
                INTERVAL 168 DAY
            ) = CURDATE()) ||(
                IF(
                    dd_data.mode = 1,
                    (
                        DAYOFMONTH(CURDATE()) = dd_data.salary_suggesteddeduction_date1) ||(
                            DAYOFMONTH(CURDATE()) = dd_data.salary_suggesteddeduction_date2) ||(
                                DAYOFMONTH(CURDATE()) = dd_data.salary_suggesteddeduction_date3),
                                FALSE
                            )
                        )
                    ) AND(
                        repayment_formal.date_of_last_payment != CURDATE())
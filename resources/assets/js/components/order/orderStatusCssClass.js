export const getOrderStatus = activeOrder => activeOrder.order.status ? activeOrder.order.status.name : 0;

export const getOrderStatusClass = orderStatus => {
    if (!orderStatus) return;
    switch (orderStatus.toLowerCase()) {
        case 'ok':
            return 'ok';
        case 'returned':
            return 'returned';
        case 'repossessed':
            return 'repossessed';
    }
};
export let sku_generator =
     ( supplier, id)=>{
        date = new Date().getFullYear();
        date = date.toString().slice(2,4);

        supplier = supplier.slice(0, 3);
        return `ALTS/${supplier}/${id}/${date}`;



    }



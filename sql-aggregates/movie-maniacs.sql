select "firstName", "lastName",
sum("amount") as "totalSpend"
from "customers"
join "payments" using ("customerId")
group by "firstName", "lastName"
order by "totalSpend" desc;

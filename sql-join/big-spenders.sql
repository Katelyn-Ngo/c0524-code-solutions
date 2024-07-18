select
"c". "firstName",
"c". "lastName",
"p". "amount"
from "customers" as "c"
join "payments" as "p"
on "c". "customerId" = "p". "customerId"
order by "p". "amount" desc
limit 10;

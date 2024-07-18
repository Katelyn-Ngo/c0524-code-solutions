select "countries"."name" as "countryName",
count("cities". "cityId") as "numberOfCities"
from "cities"
join "countries" using ("countryId")
group by "countryName"

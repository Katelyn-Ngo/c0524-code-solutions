select
"actors". "firstName",
"actors". "lastName"
from
"films" as "f"
join
"castMembers" as "cm"
using ("filmId")
join
"actors"
using ("actorId")
where "f". "title" = 'Jersey Sassy';

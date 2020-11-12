SELECT name as Employee FROM employee x
WHERE x.salary > 
    (SELECT y.salary FROM employee y
     WHERE y.id=x.managerId
    )
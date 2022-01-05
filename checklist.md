## To Do:

### Add Trip
- [x] Create edit trip component
*trip details page*
- [x] wire edit button to send user and trip id to edit page
*edit trip page*
- [x] setup useEffect to fire dispatch to saga function to
fetch trip to edit (w/payload of params.id)
- [ ] setup saga function to get trip to edit from DB
- [ ] create trip to edit reducer
- [ ] setup GET route to get trip info from DB
- [ ] in saga function, send trip info to trip to edit reducer 

- [ ] setup local state w/ start values equal to trip to edit reducer
- [ ] bundle local state into object (like add page)
- [ ] create saga function w/ axios PUT route
- [ ] dispatch local state to saga function w/ PUT route
- [ ] setup PUT route in server to update item



### Future To Do's
- Trip details page layout (checkout responsive pricing table layouts)
- Only allow user to add trip if date is in certain format on add trip page






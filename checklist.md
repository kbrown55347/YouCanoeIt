## To Do:

### View Trip Details
*Refer to Movies Saga Project*
- [x] setup view trip details component
- [x] (user page) route user to view trip details page on click of view details
- [x] Server route that will send back "details" data for one trip
- [ ] Saga function to grab data we need for "details" view
- [ ] Create reducer to hold current "details" data
    will return object like:
     {
        id: id,
        trip_name: trip_name,
        start_date: start_date,
        end_date: end_date,
        entry_point: entry_point,
        exit_point: exit_point,
        longest_portage: longest_portage,
        lakes: lakes,
        comments: comments,
        image_url: image_url,
        image_description: image_description
        (do I need user id??)
     }






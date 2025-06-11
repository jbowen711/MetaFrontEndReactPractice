function DessertsList(props) {
  // Implement the component here.
    const filterSort = props.data
        .filter(dessert => dessert.calories <= 500)
        .sort((dessert1, dessert2) => dessert1.calories - dessert2.calories)

    const mappedItems = filterSort.map(dessert => {
        const itemText = `${dessert.name} - ${dessert.calories} cal`
        
        return <li>{itemText}</li>
    })
  return(
    <ul>
        {mappedItems}
    </ul>
  )
}

export default DessertsList;

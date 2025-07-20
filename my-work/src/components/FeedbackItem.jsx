function FeedbackItem( {item} ) {
   return (
      <div className="card" id="id">
         <div className="num-display">{item.rating}</div>
         <div className="text-display">{item.text}</div>
      </div>
   )
}

export default FeedbackItem
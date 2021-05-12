const ChoiceList = ({ choices, callback }) => {

    

    
    return (
        <div className="flex flex-col h-full">
            {
                choices.map((choice, index) => 
                {
                    return (
                        <p className="border-2 border-purple-600 rounded h-1/4 m-2 p-2
                        hover:text-white hover:bg-purple-600 cursor-pointer" key={index} onClick={() => callback(choice.target)}>{choice.content}</p>
                    )
                })
                
            }
            

        </div>
    )
}

export default ChoiceList

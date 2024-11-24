interface Props {
    config: any
    data: any
}

const RatioList = ({config, data}: Props) => {
    // Map over config to generate a list of rows dynamically
    const renderedCells = config.map((row: any) => {
        return (
            <li className='py-3 sm:py-4'>
                <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                        {/* Display the label */}
                        <p className="text-sm font-medium text-gray-900 truncate">
                            {row.label}
                        </p>
                        {/* Conditionally display info if it exists */}
                        <p className="text-sm text-gray-500 truncate">
                            {row.info}
                        </p>              
                    </div>
                    {/* Render dynamic content using the render function */}
                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                        {row.render(data)}
                    </div>
                </div>
            </li>
        )
    })
    return (
        <div className="bg-white shadow rounded-lg ml-4 mt-4 mb-4 p-4 sm:p-6 w-full">
            {/* Render the list of rows */}
            <ul className="divide-y divide-gray-200">{renderedCells}</ul>
        </div>
    )
}

export default RatioList
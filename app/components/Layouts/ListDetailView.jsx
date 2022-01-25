import React from 'react';

const ListDetailView = ({ list, detail, hasDetail = false }) => {
    return (
        <div className="flex w-full">
            {list && (
                <div
                    id="list"
                    className={`bg-dots ${hasDetail ? 'hidden lg:flex' : 'min-h-screen w-full'
                        }`}
                >
                    {list}
                </div>
            )}
            {detail}
        </div>
    )
}

export default ListDetailView;
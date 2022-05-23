import React from 'react'

export const Form = (props) => {
    return (
        <div>
            <div className='mt-1'>
                {/* <form action='#' method='POST'> */}
                    <div className='relative 	mt-2'>
                        <div className='relative flex items-center '>
                            <input
                                id={props.id}
                                name={props.name}
                                type={props.type}
                                placeholder={props.placeholder}
                                autoComplete="off"
                                onChange={props.onChange}
                                required
                                className='peer border-1	border-slate-200 
                            hover:border-indigo-300  active:border-drop-shadow-2xl   w-full h-11 rounded-lg pl-4 '
                            />

                            <div className='absolute items-center right-0 w-5 h-4 top-2 bottom-2' onClick={props.onClick} >{props.icon}</div>
                        </div>
                        <label for='name' className='absolute left-4 top-0  pb-1 text-xs text-neutral-300	'>{props.label}</label>
                       
                    </div>
                   

                {/* </form> */}

            </div>
        </div>
    )
}

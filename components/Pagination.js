import Link from 'next/link'

export default function Pagination({currentPage, postsPerPage, allPosts, pagedUrlBase, archive}) {

    // Get the total number of posts
    const totalPosts = allPosts.length;

    // Figure out the total number of pages
    const totalPages = Math.ceil(totalPosts/postsPerPage);

    // Create an array that we can iterate over. Start at one as we rarely have page/0
    const pageLinks = [];
    let i = 1;
    while(i <= totalPages) {
        pageLinks.push(i); i++;
    }

    return (
        <div className="flex items-center justify-center w-full my-8">

            {pageLinks.map((page, i) => {
                return (
                    <span key={i}>
                        {page === 1 && 
                            <li className="mx-2 list-none ">
                                {
                                    currentPage == 1 
                                    ? <div className="px-4 py-2 text-white rounded-lg bg-orange">{page}</div>
                                    : <Link scroll={false} className="px-4 py-2 bg-white text-orange" href={`/${pagedUrlBase}/`}><a>{page}</a></Link>
                                }                            
                            </li>
                        }
                        {page !== 1 && 
                            <li className="mx-2 list-none">
                                {
                                    currentPage == page
                                    ? <div className="px-4 py-2 text-white rounded-lg bg-orange">{page}</div>
                                    : <Link scroll={false} className="px-4 py-2 bg-white text-orange" href={`/${pagedUrlBase}/page/${page}`}><a>{page}</a></Link>
                                }
                            </li>
                        }
                    </span>
                )                
            })}

        </div>
    )   
}
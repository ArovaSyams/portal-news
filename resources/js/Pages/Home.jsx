import PagesLayout from "@/Layouts/PagesLayout";

export default function Home(props) {
    return (
        <PagesLayout>
            <section>
                <div className='flex flex-row space-x-14'>
                    <div className='basis-1/2'>
                        <img src="./img/beranda.jpg" className='rounded-lg' width={'100%'} alt="" />
                    </div>
                    <div className='basis-1/2'>
                        <div>
                            <p className='text-4xl text-ellipsis font-serif leading-tight mb-6'><a href="">Menteri komunikasi ditetapkan sebagi tersangka</a></p>
                            <p className='text-gray-800'><a href="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus laborum consectetur repudiandae veritatis soluta enim aperiam, deleniti architecto necessitatibus. Eligendi ad excepturi aliquid rerum harum quam animi aut fuga laborum.</a></p>
                            <div className='flex flex-row mt-6'>
                                <a href='' className='mr-3 font-semibold text-red-900'>Teknologi</a>
                                
                                <p className='text-gray-500'>Selasa, 17 agustus 2022 14:00 WIB</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='mt-10'>
                <div className='flex flex-row justify-between'>

                    <p className='text-4xl mb-6'>Berita Populer</p>
                    <a href='' className='text-lg mb-6 font-semibold text-red-900'>See more</a>
                </div>
                <div className='flex flex-row space-x-6'>
                    <div className='flex-auto'>
                        <img src="./img/beranda.jpg" className='rounded-lg' width={'100%'} alt="" />
                        <div className='mt-6'>
                            <p className='text-gray-500 text-sm pb-3'>Selasa, 17 agustus 2022 14:00 WIB</p>
                            <p className='font-semibold text-red-900'>Teknologi</p>
                            <p className='text-2xl font-serif pb-3'>Indonesia menang 3-4 dalam laga berkelas</p>
                            <p className='text-sm leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum et, impedit modi laboriosam dolore aliquam esse soluta aut</p>
                        </div>
                    </div>
                    <div className='flex-auto'>
                        <img src="./img/beranda.jpg" className='rounded-lg' width={'100%'} alt="" />
                        <div className='mt-6'>
                            <p className='text-gray-500 text-sm pb-3'>Selasa, 17 agustus 2022 14:00 WIB</p>
                            <p className='font-semibold text-red-900'>Teknologi</p>
                            <p className='text-2xl font-serif pb-3'>Indonesia menang 3-4 dalam laga berkelas</p>
                            <p className='text-sm leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum et, impedit modi laboriosam dolore aliquam esse soluta aut</p>
                        </div>
                    </div>
                    <div className='flex-auto'>
                        <img src="./img/beranda.jpg" className='rounded-lg' width={'100%'} alt="" />
                        <div className='mt-6'>
                            <p className='text-gray-500 text-sm pb-3'>Selasa, 17 agustus 2022 14:00 WIB</p>
                            <p className='font-semibold text-red-900'>Teknologi</p>
                            <p className='text-2xl font-serif pb-3'>Indonesia menang 3-4 dalam laga berkelas</p>
                            <p className='text-sm leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum et, impedit modi laboriosam dolore aliquam esse soluta aut</p>
                        </div>
                    </div>
                    <div className='flex-auto'>
                        <img src="./img/beranda.jpg" className='rounded-lg' width={'100%'} alt="" />
                        <div className='mt-6'>
                            <p className='text-gray-500 text-sm pb-3'>Selasa, 17 agustus 2022 14:00 WIB</p>
                            <p className='font-semibold text-red-900'>Teknologi</p>
                            <p className='text-2xl font-serif pb-3'>Indonesia menang 3-4 dalam laga berkelas</p>
                            <p className='text-sm leading-relaxed'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum et, impedit modi laboriosam dolore aliquam esse soluta aut</p>
                        </div>
                    </div>
                    
                </div>
            </section>

            <section className='mt-10'>
                <div>
                <p className='text-4xl mb-6'>Berita Terbaru</p>
                </div>

                <div>
                    
                    {props.news.map(function(news) {
                        const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
                        let objectDate = new Date(news.created_at);
                        let day = weekday[objectDate.getDay()];
                        let date = objectDate.getDate();
                        let month = objectDate.getMonth() + 1;
                        let year = objectDate.getFullYear();
                        
                        return (
                        <div className='flex flex-row space-x-10 items-center mb-6' key={news.id}>
                        <div className='basis-1/4'>
                            <a href=""><img src="./img/beranda.jpg" className='rounded-lg' alt="" width={'100%'}/></a>
                        </div>
                        <div className='basis-3/4'>
                            <p className='text-gray-500 text-sm pb-3'>{`${day}, ${date}-${month}-${year}`}, {new Date(news.created_at).toLocaleTimeString()}</p>
                            <p className='text-3xl font-serif pb-3'><a href={`/news/${news.id}`}>{news.title}</a></p>
                            {props.category.map(function(category) {
                                if(category.id === news.category_id) {
                                    return (
                                        <p className='font-semibold text-red-900' key={category.id}><a href="">{category.category}</a></p>
                                    )
                                }
                            })}
                            </div>
                        </div>
                        )
                    })}
                </div>
                
            </section>
        </PagesLayout>
    )
}
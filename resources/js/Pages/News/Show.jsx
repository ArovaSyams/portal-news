import PagesLayout from "@/Layouts/PagesLayout";
import { Link } from "@inertiajs/react";

export default function Show(props) {
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let objectDate = new Date(props.news.created_at);
    let day = weekday[objectDate.getDay()];
    let date = objectDate.getDate();
    let month = objectDate.getMonth() + 1;
    let year = objectDate.getFullYear();

    return (
        <PagesLayout>
            <div className="flex flex-row space-x-10">
                <div className="basis-4/6">
                    <div>
                        <p className="text-gray-500 mb-6">Home {'>'} Teknology</p>
                        <p className="text-4xl font-bold mb-6">{props.news.title}</p>
                        <p className="text-gray-500 font-light mb-6">{`${day}, ${date}-${month}-${year}`}  {new Date(props.news.created_at).toLocaleTimeString()}</p>
                    </div>
                    <div className="mb-6">
                        <img src="/img/beranda.jpg" className="rounded-lg" width={'100%'} alt="" />
                    </div>
                    <div>
                        <p><span className="text-red-800 font-semibold text-lg">PortalNews - </span>{props.news.body}</p>
                    </div>
                </div>
                <div className="basis-2/6">
                    <div className="sticky top-5">
                        <div className="mb-6">
                            <p className="text-2xl font-medium text-red-800">Berita Terpopuler</p>
                        </div>
                        <div>
                            <div className="flex flex-row items-center space-x-3 mb-4">
                                <div className="basis-2/6">
                                    <img src="/img/beranda.jpg" className="rounded-md" width={'100%'} alt="" />
                                </div>
                                <div className="basis-4/6">
                                    <p className="text-base leading-tight font-medium mb-1">Menteri komunikasi menjadi tersangka korupsi </p>
                                    <p className="text-xs "><Link className="text-red-800">National</Link> <span className="text-gray-500">17-04-2004</span></p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center space-x-3 mb-4">
                                <div className="basis-2/6">
                                    <img src="/img/beranda.jpg" className="rounded-md" width={'100%'} alt="" />
                                </div>
                                <div className="basis-4/6">
                                    <p className="text-base leading-tight font-medium mb-1">Menteri komunikasi menjadi tersangka korupsi </p>
                                    <p className="text-xs "><Link className="text-red-800">National</Link> <span className="text-gray-500">17-04-2004</span></p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center space-x-3 mb-4">
                                <div className="basis-2/6">
                                    <img src="/img/beranda.jpg" className="rounded-md" width={'100%'} alt="" />
                                </div>
                                <div className="basis-4/6">
                                    <p className="text-base leading-tight font-medium mb-1">Menteri komunikasi menjadi tersangka korupsi </p>
                                    <p className="text-xs "><Link className="text-red-800">National</Link> <span className="text-gray-500">17-04-2004</span></p>
                                </div>
                            </div>
                            <div className="flex flex-row items-center space-x-3 mb-4">
                                <div className="basis-2/6">
                                    <img src="/img/beranda.jpg" className="rounded-md" width={'100%'} alt="" />
                                </div>
                                <div className="basis-4/6">
                                    <p className="text-base leading-tight font-medium mb-1">Menteri komunikasi menjadi tersangka korupsi </p>
                                    <p className="text-xs "><Link className="text-red-800">National</Link> <span className="text-gray-500">17-04-2004</span></p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </PagesLayout>
    )
}
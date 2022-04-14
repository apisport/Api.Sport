import Head from 'next/head'
import Image from 'next/image'
import Helmet from 'react-helmet'
import Pagination from '../../components/Pagination'
import CardVenue from '../../components/user/cari/CardVenue'


export default function Lapangan() {
    return (
        <>
            <div className='container my-4'>
                <h1>Hasil Pencarian Lapangan</h1>
            </div>
            <div>
                <div className="container my-4">
                    <div className="row d-flex justify-content-center align-items-center">
                        <div className="col-md-12">
                            <div className="search"> <i className="fa fa-search" /> <input type="text" className="form-control" placeholder="Cari Lapangan di sini" /> <button className="btn btn-fill text-white">Cari</button> </div>
                        </div>
                        <span className='text-mute mt-3'>Menampilkan 10 data dari 300 data</span>
                    </div>
                </div>
                <div className="row row-cols-1 row-cols-md-4 g-4 mt-3">

                    <CardVenue />
                </div>
            </div>
            <div className='container d-flex mt-4 text-center justify-content-center'>
                <Pagination />
            </div>



        </>
    )
}

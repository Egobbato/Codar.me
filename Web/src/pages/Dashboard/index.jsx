import {Icon} from '~/components'

export const Dashboard = ()=>(
    <div className="">
        <header className="bg-red-500 text-white p-4">
            <div className="container max-w-3xl p-4 flex justify-between">
                <img src="../public/logo/logo-fundo-vermelho.svg" className="w-28 md:w-40"></img>
                <a href='/profile'>
                <Icon name='profile' className='w-10' />
                </a>
            </div>
        </header>
        <main>
            <section id='header' className=" bg-red-500 text-white p-4">
                <div className='container max-w-3xl space-y-2'>
                <span >Olá Eduardo</span>
                <h3 className='text-2xl font-bold'>Qual o seu palpite?</h3>

                </div>
            </section>

            <section id='content'>

            </section>
        </main>
    </div>
)
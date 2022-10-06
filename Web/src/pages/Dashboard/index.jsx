import {Icon,Card} from '~/components'

export const Dashboard = ()=>(
    <div className="">
        <header className="bg-red-500 text-white ">
            <div className="container max-w-3xl p-4 flex justify-between">
                <img src="../public/logo/logo-fundo-vermelho.svg" className="w-28 md:w-40"></img>
                <a href='/profile'>
                <Icon name='profile' className='w-10' />
                </a>
            </div>
        </header>
        <main className=''>
            <section id='header' className=" bg-red-500 text-white">
                <div className='container max-w-3xl space-y-2 p-4'>
                <span >Olá Eduardo</span>
                <h3 className='text-2xl font-bold'>Qual o seu palpite?</h3>

                </div>
            </section>

            <section id='content' className='p-4 container max-w-3xl space-y-4'>

                <Card 
                timeA={{slug:"sui"}}
                timeB={{slug:"cam"}}
                match = {{time:"7:00"}}
                />
                <Card 
                timeA={{slug:"uru"}}
                timeB={{slug:"cor"}}
                match = {{time:"7:00"}}
                />
                <Card 
                timeA={{slug:"por"}}
                timeB={{slug:"gan"}}
                match = {{time:"7:00"}}
                />
            </section>
        </main>
    </div>
)

import { CardUsageExample } from '../components/CarRefPrice';
import { ListUsageExample } from './../components/ListUser';
import { LegendExample } from '../components/CardLegend';
import { AreaChartHero } from '../components/AreaComponet';
import { BarChartExampleWithGroups } from '../components/BarChart';
import Example from './../components/Dashboard';

function Page() {
    return (
        // dashboard
        <>
            <Example />
            <div className='container mx-auto pt-10'>
                <div className='grid grid-cols-4 gap-2'>
                    <CardUsageExample />
                    <CardUsageExample />
                    <CardUsageExample />
                    <CardUsageExample />
                </div>
                <div className='flex mt-10'>
                    <div className='w-1/2 px-7 flex flex-col justify-between'>
                        <ListUsageExample />
                    </div>
                    <div className='w-1/2 px-7 flex flex-col justify-between'>
                        <LegendExample />
                    </div>
                </div>
                <div className='grid grid-cols-4 gap-2 mt-10'>
                    <div className='col-span-2 px-7'>
                        <AreaChartHero />
                    </div>
                    <div className='col-span-2 px-7'>
                        <BarChartExampleWithGroups />
                    </div>
                </div>

            </div>
        </>

    );
}

export default Page;

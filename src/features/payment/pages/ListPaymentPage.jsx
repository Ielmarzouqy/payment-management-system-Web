import SideBar from '../../admin/components/SideBar';
import Header from '../../admin/layout/Header';
import AllPayments from '../component/AllPayments';
import ListPayments from '../component/ListPayments';


const ListPaymentPage = () => {
  return (
    <>
      <div className="grid h-screen min-h-screen w-full overflow-hidden lg:grid-cols-[280px_1fr]">
        <SideBar />
        <div className="flex flex-col">
          <Header />
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <div className="flex items-center gap-4">
              <h1 className="font-semibold text-lg md:text-xl">Dashboard</h1>
            </div>
            {/* <AllPayments/> */}
            <ListPayments></ListPayments>
         
          </main>
        </div>
      </div>
    </>
  );
}

export default  ListPaymentPage

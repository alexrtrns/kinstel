import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export const metadata: Metadata = {
    title: 'Kinstel Solutions | Delivery Policy',
     robots: {
        index: false,
        follow: false,
    }
};

export default function DeliveryPolicyPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-grow container mx-auto px-4 md:px-6 py-12">
                <div className="prose prose-invert max-w-none mx-auto">
                    <h1>Delivery Policy</h1>
                    <p>Last updated: July 29, 2024</p>

                    <h2>1. Nature of Services</h2>
                    <p>
                        Kinstel Solutions provides digital services, including web design, web development, and
                        other digital solutions. We do not sell or ship any physical goods.
                    </p>

                    <h2>2. Project Delivery</h2>
                    <p>
                        The delivery of our services is entirely electronic. Final deliverables, such as a
                        completed website, will be deployed to a web hosting server agreed upon by both parties.
                    </p>
                    <p>
                        Project timelines and delivery milestones will be clearly outlined in the project
                        agreement signed before the commencement of any work. Delivery is considered complete
                        when the final version of the website is launched and accessible online.
                    </p>

                    <h2>3. Access to Deliverables</h2>
                    <p>
                        Upon project completion and final payment, the client will be given full administrative
                        access to the website and its associated accounts (e.g., hosting control panel, domain
                        registrar), unless a separate maintenance agreement is in place.
                    </p>

                    <h2>4. No Shipping</h2>
                    <p>
                        As our services are digital, there are no shipping fees, shipping times, or physical
                        deliveries involved. All work and communication will be handled electronically via email,
                        project management tools, or video calls.
                    </p>

                    <p className="mt-8">
                        For queries, reach out at <a href="mailto:contact@kinstel.com">contact@kinstel.com</a>.
                    </p>
                </div>
            </main>
            <Footer />
        </div>
    );
}

import { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import { ClickToCallLink } from '@/components/ui/click-to-call-link';
import { InquiryForm } from '@/components/sections/inquiry-form';

export const metadata: Metadata = {
    title: 'Kinstel Solutions | Contact Us',
};

export default function ContactPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-grow container mx-auto px-4 md:px-6 py-20">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
                        Contact Us
                    </h1>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We're here to help. Reach out to us with any questions or to start your project.
                    </p>
                </div>

                <div className="mt-16 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8 text-lg">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <Mail className="h-6 w-6 text-accent" />
                            </div>
                            <div>
                                <h2 className="font-semibold">Email</h2>
                                <a href="mailto:contact@kinstel.com" className="text-muted-foreground hover:text-accent">
                                    contact@kinstel.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <Phone className="h-6 w-6 text-accent" />
                            </div>
                            <div>
                                <h2 className="font-semibold">Phone</h2>
                                 <ClickToCallLink phoneNumber="+919889988408" className="text-muted-foreground hover:text-accent">
                                    +91 98899 88408
                                </ClickToCallLink>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 mt-1">
                                <MapPin className="h-6 w-6 text-accent" />
                            </div>
                            <div>
                                <h2 className="font-semibold">Registered Address</h2>
                                <p className="text-muted-foreground">
                                    33 Shivdham, Nijampur Malhaur,
                                    <br />
                                    Gomti Nagar, Lucknow, UP 226001
                                </p>
                            </div>
                        </div>
                         <div className="mt-12 text-sm text-muted-foreground border-t pt-8">
                            <p>
                                Kinstel Solutions is a proprietorship registered under India’s Ministry of MSME.
                            </p>
                            <p>
                                Udyam Registration: UDYAM-UP-50-0230220
                            </p>
                         </div>
                    </div>
                    
                    <div>
                        <InquiryForm />
                    </div>
                </div>
                 
            </main>
            <Footer />
        </div>
    );
}

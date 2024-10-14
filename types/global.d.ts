export {};

declare global {
    type ApiPaginated<T> = {
        count: number,
        next: string | null,
        previous: string | null,
        results: T[]
    }

    type Customer = {
        id: number,
        corporate_date: string,
        name: string,
        program_name: string,
        province: number,
        city: number
    }

    type Logo = {
        alt: string;
        link: string | null;
    }

    type HeroProps = {
        title: string;
        description: string;
        buttons: {
            title: string,
            link: string
        }[];
        images: {
            alt: string,
            link: string
        }[];
    }

    type NavbarItem = {
        id: number,
        link: string,
        name: string
    }

    type Product = {
        id: number,
        name: string,
        slug: string,
        description: string,
        category: {
            id: number,
            name: string,
            breadcrumb: string
        },
        slides_list: {
            id: number,
            image: string,
            description: string
        }[],
        main_photo: string,
        secend_photo: string,
        product_icon_photo: string,
        features_list: {
            feature_text: string
        }[],
        details_list: {
            detail_text: string
        }[]
    }

    type Manager = {
        id: number;
        name: string;
        photo: string;
        description: string;
        ordering: number;
    }

    type Certificate = {
        id: number;
        image: string;
        title: string;
        description: string;
    }

    type Variant = {
        id: number;
        customer_count: number;
    }

    type DemoProps = {
        image: string | null;
        title: string;
        subtitle: string;
        description: string;
        form: {
            title: string;
            description: string;
        };
    }

    type AboutUsProps = {
        image: string | null;
        title: string;
        description: string;
        projects: Product[];
    }

    type FooterProps = {
        title: string;
        description: string;
        address: string;
        socials: {
            soical: string,
            link: string
        }[];
        emails: string[];
        phones: string[];
        copyright: string;
    }

    type WorkFieldProps = {}

    type HomePage = {
        logo: Logo;
        body_logo: Logo;
        hero: HeroProps;
        work_fields: WorkFieldProps;
        products: Product[];
        managers: Manager[];
        certificates: Certificate[];
        variants: Variant[];
        demo: DemoProps;
        about_us: AboutUsProps;
        footer: FooterProps;
    }

    type Content = {
        logo: {
            alt: string,
            link: string
        },
        nav_links: {
            id: number,
            name: string,
            link: string
        }[],
        body_logo: {
            alt: string,
            link: string
        },
        work_fields: {
            title: string,
            description: string,
            fields: {
                tags: {
                    title: string,
                    link: string
                }[],
                image: {
                    image: string,
                    alt: string
                },
                title: string,
                description: string,
                ordering: number
            }[]
        },
        states: {
            id: number,
            name: string,
            customer_count: number
        }[],
        leaders: {
            title: string,
            description: string,
            members: {
                id: number,
                name: string,
                image: string,
                description: string,
                ordering: number
            }[]
        },
        certificates: {
            title: string,
            description: string,
            items: {
                id: number,
                image: string,
                title: string,
                description: string
            }[]
        },
        demo: {
            image: null,
            title: string,
            subtitle: string,
            description: string,
            form: {
                title: string,
                description: string
            }
        },
        products: Product[],
        about_us: {
            image: string,
            title: string,
            description: string,
            projects: {
                count: number,
                title: string
            }[]
        },
        hero: {
            title: string,
            description: string,
            buttons: {
                title: string,
                link: string
            }[],
            images: {
                alt: string,
                link: string
            }[]
        }
        footer: {
            title: string,
            description: string,
            address: string,
            socials: {
                soical: string,
                link: string
            }[],
            copyright: string,
            emails: string[],
            phones: string[],
        },
    }
}
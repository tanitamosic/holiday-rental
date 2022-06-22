import { createRouter, createWebHashHistory } from 'vue-router'
import Registration from '../view/Registration-Component.vue'
import CottageOverview from '../view/CottageOverview.vue'
import Login from '../view/Login.vue'
import CottageDetails from '@/view/CottageDetails.vue'
import BoatsOverview from '@/view/BoatsOverview.vue'
import BoatDetails from '@/view/BoatDetails.vue'
import AdventureOverview from '@/view/AdventureOverview.vue'
import AdventureDetails from '@/view/AdventureDetails.vue'

import BoatProfile from '@/components/BoatProfile.vue'
import CreateBoat from '@/components/CreateBoat.vue'
import BoatOwnerSidebar from '@/components/BoatOwnerSidebar.vue'

import CottageProfile from '@/components/CottageProfile'
import CottageOwnerSidebar from '@/components/CottageOwnerSidebar.vue'
import CreateCottage from '@/components/CreateCottage.vue'

import ProfileView from '@/components/ProfileView.vue';

import AdminSidebar from "@/components/AdminSidebar.vue";
import ClientSidebar from '@/components/ClientSidebar.vue'
import PendingRegistrations from '@/components/PendingRegistrations.vue'
import AccountDelRequests from '@/components/AccountDelRequests.vue'
import AdminRegistration from '@/components/AdminRegistration.vue'
import ComplaintResponse from '@/components/ComplaintResponse.vue'
import ProfitsComponent from '@/components/ProfitsComponent.vue'
import UserOverview from '@/components/UserOverview.vue'
import ReservationsOverview from '@/view/ReservationsOverview.vue'
import HistoricalReservationsOverview from '@/view/HistoricalReservationsOverview.vue'

import InstructorSidebar from '@/components/InstructorSidebar.vue'
import AdventureCreator from '@/components/CreateAdventure.vue'
import InstructorsAdventures from '@/components/InstructorsAdventures.vue'
import InstructorAdventureDetails from '@/components/InstructorAdventureDetails.vue'

const routes = [
  {
    path: '/',
    name: 'CottageOverview',
    components: {
      UnloggedContent: CottageOverview
    }
  },
  {
    path: '/register',
    name: 'Registration',
    components: {
      UnloggedContent: Registration
    }
  },
  {
    path: '/login',
    name: 'Login',
    components: {
      UnloggedContent: Login
    }
  },
  {
    path: '/CottageDetails/:id?',
    name: 'CottageDetails',
    components: {
      UnloggedContent: CottageDetails
    }
  },
  {
    path: '/BoatsOverview',
    name: 'BoatsOverview',
    components: {
      UnloggedContent: BoatsOverview
    }
  },
  {
    path: '/BoatDetails/:id?',
    name: 'BoatDetails',
    components: {
      UnloggedContent: BoatDetails
    }
  },
  {
    path: '/AdventureOverview',
    name: 'AdventureOverview',
    components: {
      UnloggedContent: AdventureOverview
    }
  },
  {
    path: '/AdventureDetails/:id?',
    name: 'AdventureDetails',
    components: {
      UnloggedContent: AdventureDetails
    }
  },
  {
    path: '/admin/profile',
    components: {
      LeftSidebar: AdminSidebar,
      MainContent: ProfileView
    } // DONE
  },
  {
    path: '/admin/pendingreg',
    components: {
      LeftSidebar: AdminSidebar,
      MainContent: PendingRegistrations
    } // DONE
  },
  {
    path: '/admin/delreq',
    components: {
      LeftSidebar: AdminSidebar,
      MainContent: AccountDelRequests
    } // DONE 
  },
  {
    path: '/admin/complaints',
    components: {
      LeftSidebar: AdminSidebar,
      MainContent: ComplaintResponse
    } // Done
  },
  {
    path: '/admin/cottage-overview',
    components: {
      LeftSidebar: AdminSidebar,
      MainContent: CottageOverview
    } // DONE
  },
  {
    path: '/admin/boat-overview',
    components: {
      LeftSidebar: AdminSidebar,
      MainContent: BoatsOverview
    } // DONE
  },
  {
    path: '/admin/adventure-overview',
    components: {
      LeftSidebar: AdminSidebar,
      MainContent: AdventureOverview
    } // DONE
  },
  {
    path: '/admin/admin-registration',
    components: {
      LeftSidebar: AdminSidebar,
      MainContent: AdminRegistration
    } // DONE
  },
  {
    path: '/admin/new-admin-pass-reset',
    components: {
      UnloggedContent: AccountDelRequests
    } // DONE
  },
  {
    path: '/admin/users',
    components: {
      LeftSidebar: AdminSidebar,
      MainContent: UserOverview
    } // DONE
  },
  {
    path: '/admin/profits',
    components: {
      LeftSidebar: AdminSidebar,
      MainContent: ProfitsComponent
    } // DONE
  },
  {
    path: '/bo/profile/',
    name: 'BOProfileView',
    components: {
      LeftSidebar: BoatOwnerSidebar,
      MainContent: ProfileView
    } // DONE
  },
  {
    path: '/bo/boat-overview/',
    name: 'BOBoats',
    components: {
      LeftSidebar: BoatOwnerSidebar,
      MainContent: BoatsOverview
    } // DONE
  },
  {
    path: '/bo/boat-profile/:id?',
    name: 'BoatProfileOverview',
    components: {
      LeftSidebar: BoatOwnerSidebar,
      MainContent: BoatProfile
    } // FLASH SALE UNFINISHED
  },
  {
    path: '/bo/add-boat',
    name: 'AddBoat',
    components:{
      LeftSidebar: BoatOwnerSidebar,
      MainContent: CreateBoat
    }
  },
  {
    path: '/bo/profits',
    components: {
      LeftSidebar: BoatOwnerSidebar,
      MainContent: ProfitsComponent
    },
  },
  {
    path: '/co/profile/',
    name: 'COProfileView',
    components: {
      LeftSidebar: CottageOwnerSidebar,
      MainContent: ProfileView
    } // DONE
  },
  {
    path: '/co/cottage-overview/',
    name: 'COCottages',
    components: {
      LeftSidebar: CottageOwnerSidebar,
      MainContent: CottageOverview
    } // DONE
  },
  {
    path: '/co/cottage-profile/:id?',
    name: 'CottageProfileOverview',
    components: {
      LeftSidebar: CottageOwnerSidebar,
      MainContent: CottageProfile
    } // UPDATE, FLASH SALE UNFINISHED
  },
  {
    path: '/co/add-cottage',
    name: 'AddCottage',
    components: {
      LeftSidebar: CottageOwnerSidebar,
      MainContent: CreateCottage
    }
  },
  {
    path: '/co/profits',
    components: {
      LeftSidebar: CottageOwnerSidebar,
      MainContent: ProfitsComponent
    },
  },
  {
    path: '/instructor/profile',
    components: {
      LeftSidebar: InstructorSidebar,
    }
  },
  {
    path: '/client/profile',
    components: {
      LeftSidebar: ClientSidebar,
      MainContent: ProfileView
    }
  },
  {
    path: '/instructor/profits',
    components: {
      LeftSidebar: InstructorSidebar,
      MainContent: ProfitsComponent
    },
  },
  {
    path: '/instructor/create-adventure',
    components: {
      LeftSidebar: InstructorSidebar,
      MainContent: AdventureCreator
    }
  },
  {
    path: '/instructor/view-adventures',
    components: {
      LeftSidebar: InstructorSidebar,
      MainContent: InstructorsAdventures
    }
  },
  {
    path: '/instructor/view-adventure-details/:id?',
    components: {
      LeftSidebar: InstructorSidebar,
      MainContent: InstructorAdventureDetails
    }
  },
  {
    path: '/client/cottages',
    components: {
      LeftSidebar: ClientSidebar,
      MainContent: CottageOverview
    }
  },
  {
    path: '/client/boats',
    components: {
      LeftSidebar: ClientSidebar,
      MainContent: BoatsOverview
    }
  },
  {
    path: '/client/adventures',
    components: {
      LeftSidebar: ClientSidebar,
      MainContent: AdventureOverview
    }
  },
  {
    path: '/client/CottageDetails/:id?',
    components: {
      LeftSidebar: ClientSidebar,
      MainContent: CottageDetails
    }
  },
  {
    path: '/client/AdventureDetails/:id?',
    components: {
      LeftSidebar: ClientSidebar,
      MainContent: AdventureDetails
    }
  },
  {
    path: '/client/BoatDetails/:id?',
    components: {
      LeftSidebar: ClientSidebar,
      MainContent: BoatDetails
    }
  },
  {
    path: '/client/activeReservations',
    components: {
      LeftSidebar: ClientSidebar,
      MainContent: ReservationsOverview
    }
  },
  {
    path: '/client/historicalReservations',
    components: {
      LeftSidebar: ClientSidebar,
      MainContent: HistoricalReservationsOverview
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router

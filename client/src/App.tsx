import { Switch, Route } from "wouter";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import RoofReplacement from "@/pages/roof-replacement";
import StormDamage from "@/pages/storm-damage";
import InsuranceClaims from "@/pages/insurance-claims";
import Inspections from "@/pages/inspections";
import Contact from "@/pages/contact";  // ← ADD THIS LINE

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/roof-replacement" component={RoofReplacement} />
      <Route path="/storm-damage" component={StormDamage} />
      <Route path="/insurance-claims" component={InsuranceClaims} />
      <Route path="/inspections" component={Inspections} />
      <Route path="/contact" component={Contact} />  {/* ← ADD THIS LINE */}
      <Route component={NotFound} />
    </Switch>
  );
}

export default Router;
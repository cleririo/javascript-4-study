import { Card } from "./components/Card";
import { ComponenteComProps } from "./components/ComponenteComProps";
import { ComponenteControlado } from "./components/ComponenteControlado";
import { Contador } from "./components/Contador";
import { Lista } from "./components/Lista";
import { PrimeiroComponente } from "./components/PrimeiroComponente";
import { SegundoComponente } from "./components/SegundoComponente";
import { Timer } from "./components/Timer";
import { Toggle } from "./components/Toggle";

export function App() {
  return  (
    <>
    <Card title="Primeiro componente">
      <PrimeiroComponente />
    </Card>
    <Card title="JSX">
      <SegundoComponente />
    </Card>
    <Card title="Props e renderização">
      <ComponenteComProps nome="Clério" notas={[10,9,8]}/>
    </Card>
    <Card title="Lista e Keys">
      <Lista />
    </Card>
    <Card title="State">
      <Contador />
    </Card>
    <Card title="Componente controlado">
      <ComponenteControlado />
    </Card>
    <Card title="Toggle">
      <Toggle />
    </Card>
    <Card title="Timer">
      <Timer />
    </Card>
    </>
  );
}
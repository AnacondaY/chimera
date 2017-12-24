### 自定义样式
定制展开项的样式和类。
```javascript
    class Demo extends React.Component {
        render(){
            const demoStyle = {
                background: '#a483ee'
            }
            return (
                <Collapse defaultActiveIndex={2} onChange={(index, collapsed) => console.log(`当前索引:${index}, 当前索引项状态:${collapsed}`)}>
                    <Collapse.Item header="Sylvanas Windrunner">
                        <p>
                            Sylvanas was once the ranger-general of Silvermoon, a commander charged with defending the high elven kingdom of Quel'Thalas. Her skill as a leader was put to the test when the Lich King's undead Scourge attacked her nation. Though Sylvanas fought valiantly, she fell to the unholy invaders. The Scourge death knight Arthas Menethil ripped out the ranger-general's soul and transformed it into a banshee, a vengeful phantom forced to serve the Lich King. 
                        </p>
                    </Collapse.Item>
                    <Collapse.Item header="Vol'jin" className="demo-collapse-item">
                        <p>
                            Under Vol'jin's leadership, the Darkspear trolls became one of the first non-orc members of Warchief Thrall's Horde. Vol'jin quickly rose to prominence, becoming a trusted advisor to Thrall. In the years that followed, the wise troll played a part in guiding the Horde through crisis after crisis, and he earned the respect of orcs, tauren, blood elves, goblins, and Forsaken alike.
                        </p>
                    </Collapse.Item>
                    <Collapse.Item header="Gul'dan" style={demoStyle}>
                        <p>
                            Born on Draenor, homeworld of the orcs, Gul'dan was an outcast from a very young age. Utterly obsessed with obtaining power, he agreed to a secret alliance with the Burning Legion, a destructive army from beyond the stars. He drank demon blood and altered the fate of his people forever. The blood transformed Gul'dan into something hideous, bent and twisted by demonic energies. With his lieutenants, he forged the nefarious Shadow Council and attempted to corrupt the many orc clans of Draenor so they would become agents of the Legion. 
                        </p>
                    </Collapse.Item>
                </Collapse>
            )
        }
    }
```
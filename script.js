// ==========================================================================
// DATA
// ==========================================================================

const EXPERIENCE = [
  {
    role: "RTL Design Engineer",
    org: "XCLR Technologies (Pvt.) Ltd.",
    date: "02/2025 — Present",
    bullets: [
      "<strong>High-Speed I/O Subsystem (HSIOSS)</strong> — Led design and verification across 3 teams and 6 engineers for a subsystem integrating a 32 Gbps SerDes and PCIe Gen5 controller at a 1.5 GHz core clock, with 2048-bit data / 64-bit configuration AXI interfaces across 8 PCIe lanes. Defined the verification test plan spanning directed chip-level firmware testing and block-level SystemVerilog testbenches.",
      "<strong>RISC-V Vector Load/Store Unit (VLSU)</strong> — Designed a 2048-bit RVV load/store unit interfacing to a 64-bit memory port, with AXI-ID tracking, address generation and translation, and data packing/unpacking for configurable element widths (8–64 bits). Added multi-stage pipelining to cut latency and cell count.",
      "<strong>IP Replacement Across 5 Subsystems</strong> — Re-architected 5 subsystems, replacing Synopsys-sourced converters, crossbars, CDC synchronizers, and AXI bridges with PULP Platform IP, using Synopsys CoreAssembler and CoreConsultant for integration.",
      "<strong>Unified DFT / Functional JTAG Architecture</strong> — Architected a single chip-level JTAG interface muxing a DFT scan-based TAP and a functional RISC-V PULP debug TAP onto one physical port, enabling production test and hardware debug through shared pins.",
      "<strong>Control-Register-to-AXI Bridge</strong> — Designed and verified a bridge between a 16-bit native SerDes control-register interface and a 64-bit AXI configuration bus, resolving CDC and width conversion.",
      "<strong>512-bit eFuse Controller</strong> — Bridged a native eFuse memory array interface to a 32-bit AXI register-access architecture with command-driven transaction handling; validated end-to-end via QSPIS interface testing.",
      "<strong>Chip-Level Low-Power Implementation</strong> — Enabled up to 80% of the chip to run in low-power mode; built a glitch-free clock-gating power-switch mechanism handling in-flight AXI transactions safely via SLVERR/DECERR responses.",
      "<strong>VU19P FPGA SoC Bring-Up</strong> — Led development and emulation of an SoC on the VU19P FPGA using Xilinx Vivado, integrating and validating UART, DDR, and JTAG on real hardware.",
      "<strong>PULP BSCANE2 TAP Integration</strong> — Integrated PULP's <code>dmi_bscane_tap</code> via BSCANE2 so a single HS-3 cable handles both bitstream configuration and RISC-V debug access; validated halt/resume, single-stepping, breakpoints, and register/memory access on-hardware via OpenOCD/GDB.",
      "<strong>DDR4 Bring-Up &amp; Linux Boot on AWS EC2 F1</strong> — Interfaced the SoC with the F1 DDR4-C shell controller, loaded a Linux boot image, and validated end-to-end boot on the Ariane (CVA6) RISC-V core with confirmed memory-mapped access.",
      "<strong>AWS EC2 F1 Shell-Compatible SoC Subsystem</strong> — Developed and validated a subsystem making the SoC's JTAG, UART, and DDR4 interfaces compatible with the F1 Shell's OCL/BAR1 memory-mapped interface and DDR controller.",
      "<strong>JTAG Bring-Up &amp; Debug Validation on AWS EC2 F1</strong> — Bridged the design's JTAG to F1 shell connectivity, with OpenOCD translating GDB's remote protocol into scan commands; ran full halt/resume/breakpoint test cycles with consistent results across repeated runs."
    ]
  },
  {
    role: "Associate Engineer",
    org: "Xcelerium",
    date: "09/2023 — 02/2025",
    bullets: [
      "<strong>12nm Timing Closure at 1.5 GHz</strong> — Achieved -0.01 worst negative slack (WNS) and cleared setup/hold violations across 500+ paths on a RISC-V-based core subsystem, via combinational logic optimization, skew balancing, floorplanning, and SDC constraint fixes.",
      "<strong>JTAG Daisy Chain at Aries</strong> — Designed and validated a daisy-chained JTAG debug architecture linking two PULP <code>riscv-dbg</code> TAP controllers across two subsystems, allowing either core to be halted independently. Verified via SimJTAG (C DPI) in simulation and on AWS EC2 cloud FPGA.",
      "<strong>Lint, CDC &amp; RDC Sign-Off</strong> — Accomplished 0 error/warning sign-off across 4 subsystems (100+ violations each) using Synopsys SpyGlass, clearing designs for physical design.",
      "<strong>RTL Design &amp; Digital IP Integration</strong> — Integrated logic analyzers, CDC synchronizers, AXI-to-APB converters, data-width converters, crossbar interconnects, register files, and FSMs into RTL designs.",
      "<strong>AWS EC2 F1 Shell Interface Validation</strong> — Verified 4 AWS EC2 F1 shell interfaces (OCL, BAR1, DDR, SDA) using C++ drivers and SystemVerilog testbenches across emulation and simulation environments.",
      "<strong>Logic-Analyzer-Based Debugging</strong> — Debugged JTAG and SoC subsystem behavior using logic analyzers across AWS Cloud emulation and VU19P FPGA hardware.",
      "<strong>Technical Documentation &amp; Design Reviews</strong> — Authored design documents, verification test plans, timing diagrams, and block diagrams for design reviews and knowledge transfer."
    ]
  },
  {
    role: "Research Assistant",
    org: "Micro Electronics Research Lab (MERL)",
    date: "03/2020 — 09/2023",
    bullets: [
      "<strong>RV32I Core Design</strong> — Built an open-source RV32I CPU core from scratch in SystemVerilog, simulated with Verilator and FuseSoC, and emulated on an Arty A7 FPGA via Xilinx Vivado. Later integrated basic UVM and JasperGold support.",
      "<strong>Out-of-Order Upgrade to RV32I Core</strong> — Extended the core with out-of-order execution: 2-wide instruction fetch, register renaming via a Register Alias Table (RAT), a reorder buffer (ROB) for in-order commit, and reservation stations feeding ALU and branch units — migrating the pipeline to a dispatch/issue/commit structure inspired by Berkeley's BOOM.",
      "<strong>NOVA1 SoC Development</strong> — Contributed to the <a href='https://github.com/The-Nova-Project/Nova1' target='_blank' rel='noopener' style='color:var(--v-bright)'>NOVA1 SoC</a> and its AWS EC2-based emulation, plus Zyper OS bring-up.",
      "<strong>Multicore Cache Coherency &amp; CHI Research</strong> — Led research into multicore cache coherency via the OpenPiton framework, and researched converting OpenPiton's native coherence protocol to ARM CHI, mapping its directory engine onto CHI's RN-F/HN-F/SN-F abstractions.",
      "<strong>RISC-V Training &amp; Mentorship</strong> — Conducted student training programs on RTL design and open-source contribution.",
      "<strong>NOVA1 Presentation</strong> — Presented the NOVA1 project at the RISC-V Karachi Meetup."
    ]
  }
];

const PROJECTS = [
  {
    id: "hsioss",
    pin: "01",
    title: "HSIOSS — 32 Gbps SerDes + PCIe Gen5 Subsystem",
    cats: ["asic"],
    role: "XCLR Technologies · Lead, design & verification",
    short: "A high-speed I/O subsystem running a 32 Gbps SerDes and PCIe Gen5 controller at 1.5 GHz, verified across firmware and block-level testbenches.",
    body: `<p>Led design and verification across 3 teams and 6 engineers for a subsystem integrating a 32 Gbps SerDes and PCIe Gen5 controller running at a 1.5 GHz core clock with a 100 MHz reference clock.</p>
    <p>The subsystem exposes 2048-bit data and 64-bit configuration AXI interfaces, with a PIPE interface between MAC and PHY spanning 8 PCIe lanes, each through a 32-bit PIPE datapath.</p>
    <p>Defined the verification test plan covering directed chip-level firmware testing alongside block-level SystemVerilog testbenches, and adapted the IP vendor's existing UVM environments where applicable.</p>
    <div class="proj-diagram">
      <svg viewBox="0 0 640 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrow-hsioss" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--v)"/>
          </marker>
        </defs>
        <g font-family="var(--font-mono)" text-anchor="middle">
          <rect x="20" y="20" width="150" height="50" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="95" y="42" fill="var(--v-bright)" font-weight="600" font-size="12">PCIe Gen5 MAC</text>
          <text x="95" y="58" fill="var(--muted)" font-size="9.5">1.5 GHz core clk</text>

          <rect x="20" y="128" width="150" height="50" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="95" y="150" fill="var(--v-bright)" font-weight="600" font-size="12">32 Gbps SerDes</text>
          <text x="95" y="166" fill="var(--muted)" font-size="9.5">100 MHz ref clk</text>

          <rect x="235" y="74" width="150" height="50" rx="8" fill="var(--panel)" stroke="var(--a-dim)" stroke-width="1.5"/>
          <text x="310" y="96" fill="var(--a)" font-weight="600" font-size="12">PIPE Interface</text>
          <text x="310" y="112" fill="var(--muted)" font-size="9.5">8 lanes &times; 32&#8209;bit datapath</text>

          <rect x="450" y="20" width="160" height="50" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="530" y="42" fill="var(--v-bright)" font-weight="600" font-size="12">AXI Data</text>
          <text x="530" y="58" fill="var(--muted)" font-size="9.5">2048&#8209;bit</text>

          <rect x="450" y="128" width="160" height="50" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="530" y="150" fill="var(--v-bright)" font-weight="600" font-size="12">AXI Config</text>
          <text x="530" y="166" fill="var(--muted)" font-size="9.5">64&#8209;bit</text>
        </g>
        <g stroke="var(--v)" stroke-width="1.6" fill="none" marker-end="url(#arrow-hsioss)">
          <path d="M170,55 L233,90"/>
          <path d="M170,153 L233,108"/>
          <path d="M385,90 L448,50"/>
          <path d="M385,108 L448,148"/>
        </g>
      </svg>
      <p class="proj-diagram-caption">SerDes / PCIe Gen5 MAC through the PIPE interface to 2048&#8209;bit data / 64&#8209;bit config AXI</p>
    </div>`,
    tech: ["SerDes", "PCIe Gen5", "AXI", "PIPE", "SystemVerilog", "UVM"]
  },
  {
    id: "vlsu",
    pin: "02",
    title: "RISC-V Vector Load/Store Unit",
    cats: ["asic", "riscv"],
    role: "XCLR Technologies · Design",
    short: "A 2048-bit RVV load/store unit with AXI-ID tracking and configurable element-width packing, pipelined for latency and area.",
    body: `<p>Designed a 2048-bit RISC-V Vector (RVV) load/store unit interfacing to a 64-bit memory port, handling AXI-ID tracking, address generation and translation, and data packing/unpacking logic.</p>
    <p>Supports configurable element widths from 8 to 64 bits within a single vector register, and adds multi-stage pipelining to reduce both latency and cell count.</p>`,
    tech: ["RISC-V Vector Extension", "AXI", "SystemVerilog", "Pipelining"]
  },
  {
    id: "ip-replacement",
    pin: "03",
    title: "IP Replacement Across 5 Subsystems",
    cats: ["asic"],
    role: "XCLR Technologies · Re-architecture",
    short: "Replaced Synopsys-sourced converters, crossbars, and bridges with PULP Platform IP across five subsystems.",
    body: `<p>Re-architected 5 subsystems, replacing Synopsys-sourced data/protocol converters, crossbars, CDC synchronizers, and AXI-to-native-memory bridges with <a href='https://github.com/pulp-platform' target='_blank' rel='noopener' style='color:var(--v-bright)'>PULP Platform IP</a>.</p>
    <p>Used Synopsys CoreAssembler to generate GUI-based integrated RTL, and CoreConsultant to generate standalone Synopsys IPs where PULP alternatives weren't a fit.</p>`,
    tech: ["PULP Platform", "CoreAssembler", "CoreConsultant", "AXI", "CDC"]
  },
  {
    id: "unified-jtag",
    pin: "04",
    title: "Unified DFT / Functional JTAG Architecture",
    cats: ["asic", "debug"],
    role: "XCLR Technologies · Architecture",
    short: "One physical JTAG port sharing a DFT scan TAP and a functional RISC-V debug TAP for production test and hardware debug.",
    body: `<p>Architected a single chip-level JTAG interface serving two independent TAP controllers — a DFT scan-based TAP and a functional RISC-V PULP debug TAP — by muxing between both onto one physical port.</p>
    <p>This lets production test and hardware debug share the same standard JTAG pins without a dedicated port for each, simplifying the chip's pinout and bring-up flow.</p>`,
    tech: ["JTAG", "DFT", "PULP riscv-dbg", "TAP Muxing"]
  },
  {
    id: "cr-axi-bridge",
    pin: "05",
    title: "Control-Register-to-AXI Bridge",
    cats: ["asic"],
    role: "XCLR Technologies · Design & verification",
    short: "A CDC-safe bridge resolving a 16-bit native SerDes control interface to a 64-bit AXI configuration bus.",
    body: `<p>Designed and verified a protocol bridge between a 16-bit native SerDes control-register interface and a 64-bit AXI configuration bus, resolving both CDC and 64-to-16-bit data-width conversion.</p>
    <p>Validated with a block-level SV testbench, then confirmed system-level firmware testing after integrating the converter into the chip.</p>`,
    tech: ["AXI", "CDC", "SystemVerilog", "Firmware bring-up"]
  },
  {
    id: "efuse",
    pin: "06",
    title: "512-bit eFuse Controller",
    cats: ["asic"],
    role: "XCLR Technologies · Design & verification",
    short: "AXI-accessible eFuse controller with command-driven read/write transaction handling, validated through QSPIS access.",
    body: `<p>Implemented 32-bit AXI access to a 512-bit eFuse array by bridging the native eFuse memory interface to an AXI-based register-access architecture, including command-driven read/write transaction handling.</p>
    <p>Performed SystemVerilog block-level testing and validated end-to-end chip-level functionality through QSPIS interface access testing.</p>`,
    tech: ["eFuse", "AXI", "SystemVerilog", "QSPI"]
  },
  {
    id: "low-power",
    pin: "07",
    title: "Chip-Level Low-Power Implementation",
    cats: ["asic"],
    role: "XCLR Technologies · PPA & power design",
    short: "Glitch-free clock-gating and safe AXI transaction handling enabling 80% of the chip to run in low-power mode.",
    body: `<p>Performed PPA analysis and enabled up to 80% of the chip to operate in low-power mode using Synopsys IP low-power features and custom logic.</p>
    <p>Built a safe power-switch-off mechanism ensuring glitch-free clock gating on low-power entry, and handled incomplete or in-flight AXI transactions safely via AXI response errors (SLVERR/DECERR) during power-state transitions.</p>`,
    tech: ["Low-Power Design", "PPA", "AXI", "Clock Gating"]
  },
  {
    id: "vu19p",
    pin: "08",
    title: "VU19P FPGA SoC Bring-Up",
    cats: ["fpga"],
    role: "XCLR Technologies · Lead",
    short: "Led synthesis-to-bitstream bring-up of an SoC on the VU19P (HTG-950), validating UART, DDR, and JTAG on hardware.",
    body: `<p>Led development and emulation of an SoC targeting the VU19P FPGA (HTG-950 board) using Xilinx Vivado for synthesis, implementation, and bitstream generation.</p>
    <p>Integrated UART, DDR, and JTAG interfaces, and validated DDR and JTAG functionality through on-hardware emulation testing.</p>`,
    tech: ["Xilinx Vivado", "VU19P", "DDR", "UART", "JTAG"]
  },
  {
    id: "bscane2",
    pin: "09",
    title: "PULP BSCANE2 TAP — Unified JTAG Access",
    cats: ["fpga", "debug"],
    role: "XCLR Technologies · Integration",
    short: "A single HS-3 cable handling both bitstream configuration and live RISC-V debug on real hardware, via the FPGA's boundary-scan TAP.",
    body: `<p>Integrated PULP's <code>dmi_bscane_tap</code> (BSCANE2-based) to route JTAG through the FPGA's boundary-scan infrastructure via USER3/USER4, using a Digilent HS-3 cable — so one cable serves both bitstream configuration and functional RISC-V debug access.</p>
    <p>The BSCANE2 primitive internally taps the user-defined scan chain to expose PULP's debug module as the design's virtual TAP. Finalized an OpenOCD configuration with custom IR overrides, 24-bit IR, and validated the full path on-hardware via OpenOCD/GDB — halt/resume, single-stepping, breakpoints, and register/memory access — on the VU19P/HTG-950 board.</p>
    <div class="proj-diagram">
      <svg viewBox="0 0 640 190" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrow-bscane2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--v)"/>
          </marker>
        </defs>
        <g font-family="var(--font-mono)" text-anchor="middle">
          <rect x="15" y="70" width="120" height="50" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="75" y="92" fill="var(--v-bright)" font-weight="600" font-size="12">HS&#8209;3 Cable</text>
          <text x="75" y="108" fill="var(--muted)" font-size="9.5">single physical link</text>

          <rect x="180" y="70" width="150" height="50" rx="8" fill="var(--panel)" stroke="var(--a-dim)" stroke-width="1.5"/>
          <text x="255" y="92" fill="var(--a)" font-weight="600" font-size="12">BSCANE2</text>
          <text x="255" y="108" fill="var(--muted)" font-size="9.5">USER3 / USER4 taps</text>

          <rect x="380" y="14" width="230" height="50" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="495" y="36" fill="var(--v-bright)" font-weight="600" font-size="12">FPGA Config TAP</text>
          <text x="495" y="52" fill="var(--muted)" font-size="9.5">bitstream configuration</text>

          <rect x="380" y="126" width="230" height="50" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="495" y="148" fill="var(--v-bright)" font-weight="600" font-size="12">PULP riscv&#8209;dbg TAP</text>
          <text x="495" y="164" fill="var(--muted)" font-size="9.5">OpenOCD / GDB &middot; halt, step, bp</text>
        </g>
        <g stroke="var(--v)" stroke-width="1.6" fill="none" marker-end="url(#arrow-bscane2)">
          <path d="M135,95 L178,95"/>
          <path d="M330,86 L378,55"/>
          <path d="M330,104 L378,141"/>
        </g>
      </svg>
      <p class="proj-diagram-caption">One HS&#8209;3 cable, two virtual TAPs &mdash; config path and debug path share the same physical pins</p>
    </div>`,
    tech: ["JTAG", "BSCANE2", "PULP riscv-dbg", "OpenOCD", "GDB"]
  },
  {
    id: "ddr4-linux",
    pin: "10",
    title: "DDR4 Bring-Up & Linux Boot on AWS EC2 F1",
    cats: ["fpga"],
    role: "XCLR Technologies · Bring-up",
    short: "Brought up DDR4 through the F1 shell and validated an end-to-end Linux boot on the Ariane (CVA6) RISC-V core.",
    body: `<p>Interfaced the SoC with AWS EC2 F1's DDR4-C shell controller to bring up external memory, then loaded a Linux boot image into DDR.</p>
    <p>Validated end-to-end boot on the <a href='https://github.com/openhwgroup/cva6' target='_blank' rel='noopener' style='color:var(--v-bright)'>Ariane (CVA6)</a> RISC-V core, confirming memory-mapped access and core-to-DDR data integrity through the shell interface.</p>`,
    tech: ["AWS EC2 F1", "DDR4", "Ariane/CVA6", "Linux boot"]
  },
  {
    id: "f1-shell",
    pin: "11",
    title: "AWS EC2 F1 Shell-Compatible SoC Subsystem",
    cats: ["fpga"],
    role: "XCLR Technologies · Development",
    short: "Made the SoC's JTAG, UART, and DDR4 interfaces compatible with the F1 Shell's memory-mapped OCL/BAR1 interface.",
    body: `<p>Developed and validated a subsystem making the SoC's JTAG, UART, and DDR4 interfaces compatible with the AWS EC2 F1 Shell's memory-mapped interface (OCL/BAR1) and DDR controller.</p>
    <p>Verified interface accessibility through C++ host-side drivers across both F1 emulation and AWS EC2 simulation environments.</p>`,
    tech: ["AWS EC2 F1", "OCL/BAR1", "C++ drivers"]
  },
  {
    id: "f1-jtag-debug",
    pin: "12",
    title: "JTAG Bring-Up & Debug Validation on AWS EC2 F1",
    cats: ["fpga", "debug"],
    role: "XCLR Technologies · Validation",
    short: "Bridged JTAG to F1 shell connectivity with OpenOCD translating GDB's remote protocol into scan commands.",
    body: `<p>Bridged the design's JTAG interface to AWS EC2 F1 shell's JTAG connectivity, with OpenOCD running as the intermediate server — translating RISC-V GDB's remote protocol on the host side into JTAG scan commands driving the design's debug module on the target side.</p>
    <p>Ran full test cycles covering core halt/resume, single-stepping, breakpoints, and register/memory access, validating consistent debug behavior across repeated test runs.</p>`,
    tech: ["JTAG", "OpenOCD", "GDB", "AWS EC2 F1"]
  },
  {
    id: "jtag-daisy",
    pin: "13",
    title: "JTAG Daisy Chain at Aries",
    cats: ["asic", "debug"],
    role: "Xcelerium · Design & verification",
    short: "A daisy-chained JTAG debug architecture letting either of two cores be halted and debugged independently.",
    body: `<p>Designed and validated a daisy-chained JTAG debug architecture linking two PULP <code>riscv-dbg</code> TAP controllers across two subsystems, allowing either core to be halted and debugged independently while the other continued running normally.</p>
    <p>Verified via SimJTAG (C DPI) in simulation and on AWS EC2 cloud FPGA.</p>`,
    tech: ["JTAG", "PULP riscv-dbg", "SimJTAG", "AWS EC2 FPGA"]
  },
  {
    id: "timing-closure",
    pin: "14",
    title: "12nm Timing Closure at 1.5 GHz",
    cats: ["asic"],
    role: "Xcelerium · Physical-aware RTL",
    short: "Closed timing on a RISC-V core subsystem to -0.01 WNS, clearing 500+ violating paths.",
    body: `<p>Achieved -0.01 worst negative slack (WNS) and reduced setup and hold (reg2out / in2reg / in2out) violations across 500+ violating paths on a 12nm RISC-V-based core subsystem.</p>
    <p>Got there through combinational logic optimization, clock skew balancing, re-registering, floorplanning adjustments, and SDC constraint fixes.</p>`,
    tech: ["12nm", "STA", "SDC", "Floorplanning"]
  },
  {
    id: "rv32i",
    pin: "15",
    title: "Open-Source RV32I Core",
    cats: ["riscv", "research"],
    role: "MERL · Design, from scratch",
    short: "A from-scratch RV32I CPU core in SystemVerilog, simulated in Verilator/FuseSoC and emulated on an Arty A7.",
    body: `<p>Built an open-source RV32I CPU core from scratch in SystemVerilog, simulated with Verilator and FuseSoC, and emulated on an Arty A7 FPGA using Xilinx Vivado.</p>
    <p>Later integrated basic UVM and JasperGold formal verification support around the core.</p>
    <div class="proj-diagram">
      <svg viewBox="0 0 640 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrow-rv32i" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--v)"/>
          </marker>
        </defs>
        <g font-family="var(--font-mono)" text-anchor="middle">
          <rect x="10" y="40" width="100" height="60" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="60" y="65" fill="var(--v-bright)" font-weight="600" font-size="13">IF</text>
          <text x="60" y="84" fill="var(--muted)" font-size="10">fetch</text>
          <rect x="132" y="40" width="100" height="60" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="182" y="65" fill="var(--v-bright)" font-weight="600" font-size="13">ID</text>
          <text x="182" y="84" fill="var(--muted)" font-size="10">decode</text>
          <rect x="254" y="40" width="100" height="60" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="304" y="65" fill="var(--v-bright)" font-weight="600" font-size="13">EX</text>
          <text x="304" y="84" fill="var(--muted)" font-size="10">ALU / branch</text>
          <rect x="376" y="40" width="100" height="60" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="426" y="65" fill="var(--v-bright)" font-weight="600" font-size="13">MEM</text>
          <text x="426" y="84" fill="var(--muted)" font-size="10">load / store</text>
          <rect x="498" y="40" width="100" height="60" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="548" y="65" fill="var(--v-bright)" font-weight="600" font-size="13">WB</text>
          <text x="548" y="84" fill="var(--muted)" font-size="10">writeback</text>
        </g>
        <g stroke="var(--v)" stroke-width="1.8" marker-end="url(#arrow-rv32i)">
          <line x1="110" y1="70" x2="129" y2="70"/>
          <line x1="232" y1="70" x2="251" y2="70"/>
          <line x1="354" y1="70" x2="373" y2="70"/>
          <line x1="476" y1="70" x2="495" y2="70"/>
        </g>
        <text x="320" y="128" text-anchor="middle" font-family="var(--font-mono)" font-size="11" fill="var(--muted-2)">5-stage in-order pipeline &middot; Verilator / FuseSoC sim &middot; Arty A7 (Xilinx Vivado) emulation</text>
      </svg>
    </div>`,
    link: "https://github.com/Nameer-Iqbal-Ansari/RV32I-Microprocessor",
    tech: ["SystemVerilog", "Verilator", "FuseSoC", "Arty A7", "JasperGold"]
  },
  {
    id: "ooo-rv32i",
    pin: "16",
    title: "Out-of-Order Upgrade to RV32I Core",
    cats: ["riscv", "research"],
    role: "MERL · Ongoing microarchitecture work",
    short: "Extending the RV32I core with RAT-based renaming, a reorder buffer, and reservation stations — BOOM-inspired.",
    body: `<p>Extending the RV32I core with out-of-order execution: 2-wide instruction fetch, register renaming via a Register Alias Table (RAT), a reorder buffer (ROB) for in-order commit, and reservation stations feeding the ALU and branch execution units.</p>
    <p>Migrating the existing in-order pipeline to a dispatch/issue/commit structure, inspired by <a href='https://github.com/riscv-boom/riscv-boom' target='_blank' rel='noopener' style='color:var(--v-bright)'>Berkeley's BOOM</a> design.</p>
    <div class="proj-diagram">
      <svg viewBox="0 0 660 230" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrow-ooo" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--v)"/>
          </marker>
          <marker id="arrow-ooo-flush" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--a)"/>
          </marker>
        </defs>
        <g font-family="var(--font-mono)" text-anchor="middle">
          <rect x="12" y="18" width="118" height="48" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="71" y="38" fill="var(--v-bright)" font-weight="600" font-size="12">Fetch (2W)</text>
          <text x="71" y="54" fill="var(--muted)" font-size="9.5">PC gen</text>

          <rect x="166" y="18" width="128" height="48" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="230" y="38" fill="var(--v-bright)" font-weight="600" font-size="12">Decode / Rename</text>
          <text x="230" y="54" fill="var(--muted)" font-size="9.5">RAT</text>

          <rect x="330" y="18" width="110" height="48" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="385" y="38" fill="var(--v-bright)" font-weight="600" font-size="12">Dispatch</text>
          <text x="385" y="54" fill="var(--muted)" font-size="9.5">to ROB + RS</text>

          <rect x="330" y="98" width="130" height="46" rx="8" fill="var(--panel)" stroke="var(--a-dim)" stroke-width="1.5"/>
          <text x="395" y="118" fill="var(--a)" font-weight="600" font-size="11.5">ALU RS</text>
          <text x="395" y="133" fill="var(--muted)" font-size="9.5">reservation station</text>

          <rect x="330" y="158" width="130" height="46" rx="8" fill="var(--panel)" stroke="var(--a-dim)" stroke-width="1.5"/>
          <text x="395" y="178" fill="var(--a)" font-weight="600" font-size="11.5">Branch RS</text>
          <text x="395" y="193" fill="var(--muted)" font-size="9.5">reservation station</text>

          <rect x="502" y="128" width="100" height="48" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="552" y="148" fill="var(--v-bright)" font-weight="600" font-size="12">Execute</text>
          <text x="552" y="164" fill="var(--muted)" font-size="9.5">ALU / branch unit</text>

          <rect x="166" y="98" width="128" height="46" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="230" y="118" fill="var(--v-bright)" font-weight="600" font-size="12">ROB</text>
          <text x="230" y="133" fill="var(--muted)" font-size="9.5">in-order commit</text>

          <rect x="12" y="98" width="118" height="46" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="71" y="118" fill="var(--v-bright)" font-weight="600" font-size="12">Commit</text>
          <text x="71" y="133" fill="var(--muted)" font-size="9.5">arch. reg. update</text>
        </g>
        <g stroke="var(--v)" stroke-width="1.7" marker-end="url(#arrow-ooo)" fill="none">
          <line x1="130" y1="42" x2="164" y2="42"/>
          <line x1="294" y1="42" x2="328" y2="42"/>
          <path d="M385,66 L385,96"/>
          <path d="M385,144 L385,158"/>
          <path d="M460,121 L500,145"/>
          <path d="M460,181 L500,155"/>
          <path d="M294,121 L328,121"/>
          <path d="M166,121 L130,121"/>
        </g>
        <path d="M552,128 C552,20 300,4 130,42" stroke="var(--a)" stroke-width="1.4" stroke-dasharray="4 3" fill="none" marker-end="url(#arrow-ooo-flush)"/>
        <text x="330" y="14" text-anchor="middle" font-family="var(--font-mono)" font-size="9.5" fill="var(--a)">flush on branch mispredict</text>
        <text x="330" y="222" text-anchor="middle" font-family="var(--font-mono)" font-size="11" fill="var(--muted-2)">dispatch / issue / commit structure &middot; RAT-based renaming &middot; BOOM-inspired</text>
      </svg>
    </div>`,
    tech: ["Out-of-Order Execution", "Register Renaming", "ROB", "Reservation Stations", "BOOM"]
  },
  {
    id: "nova1",
    pin: "17",
    title: "NOVA1 SoC",
    cats: ["riscv", "fpga", "research"],
    role: "MERL · Contributor",
    short: "An RV64GC application-class RISC-V SoC with UART, BRAM, DDR, and JTAG, emulated on AWS EC2.",
    body: `<p>Contributed to <a href='https://github.com/The-Nova-Project/Nova1' target='_blank' rel='noopener' style='color:var(--v-bright)'>NOVA1</a>, an open-source RISC-V-based application-class AI SoC built around an RV64GC core with UART, BRAM, DDR, and JTAG support.</p>
    <p>Worked on the SoC's AWS EC2-based emulation and Zyper OS bring-up, and later presented the project at the RISC-V Karachi Meetup. Full write-up: <a href='https://github.com/Nameer-Iqbal-Ansari/Publications/blob/main/NOVA%20EMULATION%20PROJECT%20Documentation.pdf' target='_blank' rel='noopener' style='color:var(--v-bright)'>NOVA1 Project Documentation &rarr;</a></p>
    <div class="proj-diagram">
      <svg viewBox="0 0 620 250" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrow-nova1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--v)"/>
          </marker>
        </defs>
        <g font-family="var(--font-mono)" text-anchor="middle">
          <rect x="200" y="10" width="220" height="38" rx="8" fill="var(--panel)" stroke="var(--a-dim)" stroke-width="1.5"/>
          <text x="310" y="34" fill="var(--a)" font-weight="600" font-size="12">Zyper OS (software bring-up)</text>

          <rect x="220" y="76" width="180" height="52" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="310" y="98" fill="var(--v-bright)" font-weight="600" font-size="13">RV64GC Core</text>
          <text x="310" y="115" fill="var(--muted)" font-size="9.5">application-class</text>

          <rect x="30" y="158" width="560" height="26" rx="6" fill="var(--panel-2)" stroke="var(--border)" stroke-width="1.5"/>
          <text x="310" y="176" fill="var(--muted)" font-size="10.5">system interconnect</text>

          <rect x="30" y="204" width="120" height="42" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="90" y="230" fill="var(--v-bright)" font-size="12" font-weight="600">UART</text>

          <rect x="176" y="204" width="120" height="42" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="236" y="230" fill="var(--v-bright)" font-size="12" font-weight="600">BRAM</text>

          <rect x="322" y="204" width="120" height="42" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="382" y="230" fill="var(--v-bright)" font-size="12" font-weight="600">DDR</text>

          <rect x="468" y="204" width="120" height="42" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="528" y="230" fill="var(--v-bright)" font-size="12" font-weight="600">JTAG</text>
        </g>
        <g stroke="var(--v)" stroke-width="1.6" fill="none">
          <path d="M310,48 L310,74" marker-end="url(#arrow-nova1)"/>
          <path d="M310,128 L310,156" marker-end="url(#arrow-nova1)"/>
          <path d="M90,184 L90,202" marker-end="url(#arrow-nova1)"/>
          <path d="M236,184 L236,202" marker-end="url(#arrow-nova1)"/>
          <path d="M382,184 L382,202" marker-end="url(#arrow-nova1)"/>
          <path d="M528,184 L528,202" marker-end="url(#arrow-nova1)"/>
        </g>
      </svg>
      <p class="proj-diagram-caption">RV64GC-based SoC &middot; emulated on AWS EC2 &middot; presented at RISC&#8209;V Karachi Meetup</p>
    </div>`,
    link: "https://github.com/The-Nova-Project/Nova1",
    tech: ["RV64GC", "AWS EC2 emulation", "DDR", "JTAG"]
  },
  {
    id: "chi-coherency",
    pin: "18",
    title: "Multicore Cache Coherency & CHI Research",
    cats: ["research"],
    role: "MERL · Research lead",
    short: "Researched multicore coherency via OpenPiton, and mapping its directory protocol onto ARM's CHI.",
    body: `<p>Led research into multicore cache-coherent memory systems using the <a href='https://github.com/PrincetonUniversity/openpiton' target='_blank' rel='noopener' style='color:var(--v-bright)'>OpenPiton framework</a> with the Ariane core (<a href='https://github.com/MARCore1' target='_blank' rel='noopener' style='color:var(--v-bright)'>MARCore1</a>).</p>
    <p>Also researched converting OpenPiton's native coherence protocol to ARM's CHI, mapping its directory-based coherence engine onto CHI's RN-F / HN-F / SN-F node abstractions — groundwork now extending into a standalone CHI-based cache coherency project.</p>
    <div class="proj-diagram">
      <svg viewBox="0 0 620 220" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrow-chi" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--t)"/>
          </marker>
        </defs>
        <text x="130" y="24" text-anchor="middle" font-family="var(--font-mono)" font-size="11" fill="var(--muted)">OpenPiton (native)</text>
        <text x="490" y="24" text-anchor="middle" font-family="var(--font-mono)" font-size="11" fill="var(--muted)">ARM CHI (mapped)</text>
        <g font-family="var(--font-mono)" text-anchor="middle">
          <rect x="30" y="40" width="200" height="42" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="130" y="66" fill="var(--v-bright)" font-weight="600" font-size="12">L1 / L1.5 Cache (tile)</text>

          <rect x="30" y="98" width="200" height="42" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="130" y="124" fill="var(--v-bright)" font-weight="600" font-size="12">Directory Engine</text>

          <rect x="30" y="156" width="200" height="42" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="130" y="182" fill="var(--v-bright)" font-weight="600" font-size="12">Memory Controller</text>

          <rect x="390" y="40" width="200" height="42" rx="8" fill="var(--panel)" stroke="var(--t-dim)" stroke-width="1.5"/>
          <text x="490" y="60" fill="var(--t)" font-weight="600" font-size="12">RN&#8209;F</text>
          <text x="490" y="75" fill="var(--muted)" font-size="9.5">Request Node</text>

          <rect x="390" y="98" width="200" height="42" rx="8" fill="var(--panel)" stroke="var(--t-dim)" stroke-width="1.5"/>
          <text x="490" y="118" fill="var(--t)" font-weight="600" font-size="12">HN&#8209;F</text>
          <text x="490" y="133" fill="var(--muted)" font-size="9.5">Home Node (coherence)</text>

          <rect x="390" y="156" width="200" height="42" rx="8" fill="var(--panel)" stroke="var(--t-dim)" stroke-width="1.5"/>
          <text x="490" y="176" fill="var(--t)" font-weight="600" font-size="12">SN&#8209;F</text>
          <text x="490" y="191" fill="var(--muted)" font-size="9.5">Slave Node (memory)</text>
        </g>
        <g stroke="var(--t)" stroke-width="1.6" stroke-dasharray="4 3" fill="none" marker-end="url(#arrow-chi)">
          <path d="M230,61 L388,61"/>
          <path d="M230,119 L388,119"/>
          <path d="M230,177 L388,177"/>
        </g>
      </svg>
      <p class="proj-diagram-caption">Mapping OpenPiton's directory-based coherence engine onto CHI's RN&#8209;F / HN&#8209;F / SN&#8209;F node abstractions</p>
    </div>`,
    link: "https://github.com/MARCore1",
    tech: ["OpenPiton", "ARM CHI", "Cache Coherency", "Ariane Core"]
  },
  {
    id: "gsoc-azadi",
    pin: "19",
    title: "GSoC — FuseSoC Support & Ibex Rebase on Azadi-SoC",
    cats: ["research"],
    role: "Google Summer of Code 2022 · Contributor",
    short: "Added FuseSoC support to Azadi-SoC and rebased its Ibex core to the latest upstream.",
    body: `<p>Contributed to <a href='https://github.com/merledu/azadi-soc' target='_blank' rel='noopener' style='color:var(--v-bright)'>Azadi-SoC</a> during <a href='https://summerofcode.withgoogle.com/archive/2022/projects/lkRwPJpN' target='_blank' rel='noopener' style='color:var(--v-bright)'>Google Summer of Code 2022</a>, adding FuseSoC build-system support and rebasing the integrated <a href='https://github.com/lowRISC/ibex' target='_blank' rel='noopener' style='color:var(--v-bright)'>Ibex core</a> to the latest upstream commits.</p>
    <p>Read about the experience: <a href='https://medium.com/@n.i.ansari200/gsoc22-a-summer-of-opportunity-95b9b2bb9232' target='_blank' rel='noopener' style='color:var(--v-bright)'>A Summer of Opportunity &rarr;</a></p>`,
    link: "https://summerofcode.withgoogle.com/archive/2022/projects/lkRwPJpN",
    tech: ["FuseSoC", "Ibex", "Open Source"]
  },
  {
    id: "gsoc-mentor",
    pin: "20",
    title: "GSoC Mentorship — TileLink UH on Azadi-SoC",
    cats: ["research"],
    role: "Google Summer of Code 2023 · Mentor",
    short: "Mentored the TileLink Uncached Heavyweight (TL-UH) implementation on Azadi-SoC.",
    body: `<p>Returned to <a href='https://summerofcode.withgoogle.com/archive/2023/projects/3TI8MLxs' target='_blank' rel='noopener' style='color:var(--v-bright)'>Google Summer of Code</a> in 2023 as a mentor, guiding a contributor's implementation of TileLink Uncached Heavyweight (TL-UH) on the <a href='https://github.com/merledu/azadi-soc' target='_blank' rel='noopener' style='color:var(--v-bright)'>Azadi-SoC</a> platform.</p>
    <div class="proj-diagram">
      <svg viewBox="0 0 600 190" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrow-tl" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" fill="var(--v)"/>
          </marker>
        </defs>
        <g font-family="var(--font-mono)" text-anchor="middle">
          <rect x="20" y="70" width="130" height="48" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="85" y="90" fill="var(--v-bright)" font-weight="600" font-size="12">Ibex Core</text>
          <text x="85" y="106" fill="var(--muted)" font-size="9.5">TL&#8209;UH master</text>

          <rect x="210" y="60" width="180" height="68" rx="8" fill="var(--panel)" stroke="var(--a-dim)" stroke-width="1.5"/>
          <text x="300" y="86" fill="var(--a)" font-weight="600" font-size="12">TileLink UH Crossbar</text>
          <text x="300" y="102" fill="var(--muted)" font-size="9.5">Azadi&#8209;SoC interconnect</text>
          <text x="300" y="117" fill="var(--muted)" font-size="9.5">GSoC'23 mentee implementation</text>

          <rect x="450" y="10" width="130" height="42" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="515" y="36" fill="var(--v-bright)" font-size="12" font-weight="600">UART</text>

          <rect x="450" y="68" width="130" height="42" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="515" y="94" fill="var(--v-bright)" font-size="12" font-weight="600">GPIO</text>

          <rect x="450" y="126" width="130" height="42" rx="8" fill="var(--panel)" stroke="var(--v-dim)" stroke-width="1.5"/>
          <text x="515" y="152" fill="var(--v-bright)" font-size="12" font-weight="600">SRAM</text>
        </g>
        <g stroke="var(--v)" stroke-width="1.6" fill="none" marker-end="url(#arrow-tl)">
          <path d="M150,94 L208,94"/>
          <path d="M390,80 L448,31"/>
          <path d="M390,94 L448,89"/>
          <path d="M390,108 L448,147"/>
        </g>
      </svg>
      <p class="proj-diagram-caption">TL&#8209;UH master/slave ports fanning out through the crossbar to SoC peripherals</p>
    </div>`,
    tech: ["TileLink UH", "Mentorship", "Open Source"]
  }
];

const REGMAP = [
  { addr: "0x00", name: "RTL Design",         fields: ["RISC-V VLSU","JTAG","SerDes","PCIe","eFuse","UART","CDC","XBAR","Cache","AXI","APB","TileLink"] },
  { addr: "0x04", name: "EDA Tools",          fields: ["VCS","Verdi","Xilinx Vivado","GTKWave","CoreAssembler","CoreConsultant","QuestaSim","Verilator","FusionCompiler","PrimeTime"] },
  { addr: "0x08", name: "Formal Verification",fields: ["JasperGold","SVA"] },
  { addr: "0x0C", name: "Static Analysis",    fields: ["Synopsys SpyGlass (Lint / CDC / RDC)"] },
  { addr: "0x10", name: "Languages",          fields: ["Verilog","SystemVerilog","SystemVerilog-OOP","UVM (basic)","C","C++","RISC-V Assembly"] },
  { addr: "0x14", name: "Scripting",          fields: ["Tcl","Shell","Makefile","CI/CD","Python","YAML (FuseSoC)"] },
  { addr: "0x18", name: "Version Control / OS",fields: ["GitHub","GitLab","Linux","Windows"] }
];

const FILTERS = [
  { key: "all",      label: "All" },
  { key: "asic",     label: "ASIC" },
  { key: "fpga",     label: "FPGA" },
  { key: "riscv",    label: "RISC-V Core" },
  { key: "debug",    label: "Debug / JTAG" },
  { key: "research", label: "Research" }
];

// ==========================================================================
// RENDER
// ==========================================================================

function renderTimeline(){
  const el = document.getElementById("timeline");
  el.innerHTML = EXPERIENCE.map((job, i) => `
    <div class="tl-item ${i === 0 ? "open" : ""}" data-idx="${i}">
      <button class="tl-head" aria-expanded="${i === 0}">
        <div class="tl-head-left">
          <span class="tl-role">${job.role}</span>
          <span class="tl-org">${job.org}</span>
        </div>
        <span class="tl-date mono">${job.date}</span>
        <svg class="tl-chevron" viewBox="0 0 20 20" fill="none">
          <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
      <div class="tl-body" style="${i === 0 ? "" : "max-height:0;"}">
        <ul class="tl-bullets">
          ${job.bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>
      </div>
    </div>
  `).join("");

  el.querySelectorAll(".tl-head").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".tl-item");
      const body = item.querySelector(".tl-body");
      const isOpen = item.classList.contains("open");
      if (isOpen){
        body.style.maxHeight = "0px";
        item.classList.remove("open");
        btn.setAttribute("aria-expanded","false");
      } else {
        item.classList.add("open");
        btn.setAttribute("aria-expanded","true");
        body.style.maxHeight = body.scrollHeight + "px";
      }
    });
  });
}

function renderFilters(){
  const bar = document.getElementById("filterBar");
  bar.innerHTML = FILTERS.map((f,i) => `
    <button class="filter-btn ${i===0?"active":""}" data-filter="${f.key}" role="tab" aria-selected="${i===0}">${f.label}</button>
  `).join("");

  bar.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      bar.querySelectorAll(".filter-btn").forEach(b => { b.classList.remove("active"); b.setAttribute("aria-selected","false"); });
      btn.classList.add("active");
      btn.setAttribute("aria-selected","true");
      renderProjects(btn.dataset.filter);
    });
  });
}

function catLabel(cat){
  const map = { asic:"ASIC", fpga:"FPGA", riscv:"RISC-V Core", debug:"Debug / JTAG", research:"Research" };
  return map[cat] || cat;
}

let currentProjectList = PROJECTS;

function renderProjects(filter = "all"){
  const grid = document.getElementById("projectGrid");
  const list = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.cats.includes(filter));
  currentProjectList = list;

  grid.innerHTML = list.map(p => `
    <button class="project-card reveal" data-id="${p.id}">
      <div class="pc-top">
        <span class="pc-pin mono">PIN ${p.pin}</span>
        <span class="pc-cat">${catLabel(p.cats[0])}</span>
      </div>
      <div class="pc-title">${p.title}</div>
      <div class="pc-desc">${p.short}</div>
      <div class="pc-foot">
        <span>${p.role.split("·")[0].trim()}</span>
        <span>view &rarr;</span>
      </div>
    </button>
  `).join("");

  grid.querySelectorAll(".project-card").forEach(card => {
    card.addEventListener("click", () => openModal(card.dataset.id, currentProjectList));
  });
  observeReveal(grid.querySelectorAll(".project-card"));
}

function renderRegmap(){
  const el = document.getElementById("regmap");
  el.innerHTML = REGMAP.map(r => `
    <div class="regmap-row">
      <div class="regmap-addr">
        <span class="a">${r.addr}</span>
        <span class="n">${r.name}</span>
      </div>
      <div class="regmap-fields">
        ${r.fields.map(f => `<span class="chip">${f}</span>`).join("")}
      </div>
    </div>
  `).join("");
}

// ==========================================================================
// MODAL
// ==========================================================================

function openModal(id, list){
  const p = PROJECTS.find(x => x.id === id);
  if (!p) return;
  if (list) currentProjectList = list;

  document.getElementById("modalTag").textContent   = p.cats.map(catLabel).join(" · ");
  document.getElementById("modalTitle").textContent = p.title;
  document.getElementById("modalRole").textContent  = p.role;
  document.getElementById("modalBody").innerHTML    = p.body;

  let techHtml = p.tech.map(t => `<span class="chip">${t}</span>`).join("");
  if (p.link){
    techHtml += `<a href="${p.link}" target="_blank" rel="noopener" class="chip" style="color:var(--v-bright);border-color:var(--v-dim)">GitHub / Link &rarr;</a>`;
  }
  document.getElementById("modalTech").innerHTML = techHtml;

  const idx = currentProjectList.findIndex(x => x.id === id);
  document.getElementById("modalPrev").disabled = idx <= 0;
  document.getElementById("modalNext").disabled = idx === -1 || idx >= currentProjectList.length - 1;
  document.getElementById("modalOverlay").dataset.currentId = id;

  const overlay = document.getElementById("modalOverlay");
  const wasOpen = overlay.classList.contains("open");
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden","false");
  document.body.style.overflow = "hidden";
  document.querySelector(".modal-scroll").scrollTop = 0;
  if (!wasOpen){
    lastFocusedEl = document.activeElement;
    document.getElementById("modalClose").focus();
  }
}

function stepModal(dir){
  const overlay = document.getElementById("modalOverlay");
  if (!overlay.classList.contains("open")) return;
  const currentId = overlay.dataset.currentId;
  const idx = currentProjectList.findIndex(x => x.id === currentId);
  const nextIdx = idx + dir;
  if (nextIdx < 0 || nextIdx >= currentProjectList.length) return;
  openModal(currentProjectList[nextIdx].id);
}

let lastFocusedEl = null;

function closeModal(){
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden","true");
  document.body.style.overflow = "";
  if (lastFocusedEl) lastFocusedEl.focus();
}

document.getElementById("modalClose").addEventListener("click", closeModal);
document.getElementById("modalPrev").addEventListener("click", () => stepModal(-1));
document.getElementById("modalNext").addEventListener("click", () => stepModal(1));
document.getElementById("modalOverlay").addEventListener("click", e => {
  if (e.target.id === "modalOverlay") closeModal();
});
document.addEventListener("keydown", e => {
  const overlay = document.getElementById("modalOverlay");
  if (!overlay.classList.contains("open")) return;
  if (e.key === "Escape") closeModal();
  if (e.key === "ArrowRight") stepModal(1);
  if (e.key === "ArrowLeft") stepModal(-1);
  if (e.key === "Tab"){
    // simple focus trap
    const focusable = overlay.querySelectorAll('button, a[href]');
    const list = Array.from(focusable).filter(el => !el.disabled);
    if (!list.length) return;
    const first = list[0], last = list[list.length - 1];
    if (e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
  }
});

// ==========================================================================
// RESUME PICKER MODAL
// ==========================================================================
let lastResumeFocusedEl = null;

function openResumeModal(){
  const overlay = document.getElementById("resumeModalOverlay");
  if (!overlay) return;
  overlay.classList.add("open");
  overlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  lastResumeFocusedEl = document.activeElement;
  document.getElementById("resumeModalClose").focus();
}

function closeResumeModal(){
  const overlay = document.getElementById("resumeModalOverlay");
  if (!overlay) return;
  overlay.classList.remove("open");
  overlay.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (lastResumeFocusedEl) lastResumeFocusedEl.focus();
}

document.querySelectorAll("[data-resume-trigger]").forEach(btn => {
  btn.addEventListener("click", openResumeModal);
});

const resumeModalOverlay = document.getElementById("resumeModalOverlay");
if (resumeModalOverlay){
  document.getElementById("resumeModalClose").addEventListener("click", closeResumeModal);
  resumeModalOverlay.addEventListener("click", e => {
    if (e.target.id === "resumeModalOverlay") closeResumeModal();
  });
  document.addEventListener("keydown", e => {
    if (!resumeModalOverlay.classList.contains("open")) return;
    if (e.key === "Escape") closeResumeModal();
    if (e.key === "Tab"){
      const focusable = resumeModalOverlay.querySelectorAll('button, a[href]');
      const list = Array.from(focusable).filter(el => !el.disabled);
      if (!list.length) return;
      const first = list[0], last = list[list.length - 1];
      if (e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
    }
  });
}

// ==========================================================================
// NAV — mobile toggle + scrollspy
// ==========================================================================

const navToggle = document.getElementById("navToggle");
const navLinks  = document.getElementById("navLinks");
navToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navLinks.classList.remove("open")));

const sections   = ["home","about","experience","projects","skills","education","contact"]
  .map(id => document.getElementById(id)).filter(Boolean);
const navAnchors = Array.from(document.querySelectorAll("[data-nav]"));

function updateActiveNav(){
  let current = sections[0]?.id;
  const scrollPos = window.scrollY + 120;
  sections.forEach(sec => { if (sec.offsetTop <= scrollPos) current = sec.id; });
  navAnchors.forEach(a => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
}
window.addEventListener("scroll", updateActiveNav, { passive: true });

// ==========================================================================
// SCROLL REVEAL
// ==========================================================================

const revealObserver = ("IntersectionObserver" in window) ? new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting){
      entry.target.classList.add("revealed");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }) : null;

function observeReveal(nodeListOrEl){
  const nodes = nodeListOrEl.length !== undefined ? Array.from(nodeListOrEl) : [nodeListOrEl];
  nodes.forEach(el => {
    if (!el) return;
    el.classList.add("reveal");
    if (revealObserver) revealObserver.observe(el);
    else el.classList.add("revealed"); // no IO support — show immediately
  });
}

// ==========================================================================
// COPY EMAIL
// ==========================================================================

const copyEmailBtn = document.getElementById("copyEmailBtn");
if (copyEmailBtn){
  copyEmailBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const email = "nameeriqbalansari@gmail.com";
    const iconCopy = copyEmailBtn.querySelector(".icon-copy");
    const iconCheck = copyEmailBtn.querySelector(".icon-check");
    const showCopied = () => {
      iconCopy.style.display = "none";
      iconCheck.style.display = "block";
      copyEmailBtn.classList.add("copied");
      setTimeout(() => {
        iconCopy.style.display = "block";
        iconCheck.style.display = "none";
        copyEmailBtn.classList.remove("copied");
      }, 1800);
    };
    if (navigator.clipboard && navigator.clipboard.writeText){
      navigator.clipboard.writeText(email).then(showCopied).catch(() => {});
    } else {
      const ta = document.createElement("textarea");
      ta.value = email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand("copy"); showCopied(); } catch (err) {}
      document.body.removeChild(ta);
    }
  });
}

// ==========================================================================
// INIT
// ==========================================================================

document.getElementById("year").textContent = new Date().getFullYear();
renderTimeline();
renderFilters();
renderProjects();
renderRegmap();
updateActiveNav();

observeReveal(document.querySelectorAll(".section"));
observeReveal(document.querySelectorAll(".tl-item"));
observeReveal(document.querySelectorAll(".edu-card"));
observeReveal(document.querySelectorAll(".contact-card"));
observeReveal(document.querySelectorAll(".regmap-row"));

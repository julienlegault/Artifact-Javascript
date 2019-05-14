!function (e) {
	var a = {};
	function t(n) {
		if (a[n])
			return a[n].exports;
		var i = a[n] = {
			i: n,
			l: !1,
			exports: {}
		};
		return e[n].call(i.exports, i, i.exports, t),
		i.l = !0,
		i.exports
	}
	t.m = e,
	t.c = a,
	t.d = function (e, a, n) {
		t.o(e, a) || Object.defineProperty(e, a, {
			enumerable: !0,
			get: n
		})
	},
	t.r = function (e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}),
		Object.defineProperty(e, "__esModule", {
			value: !0
		})
	},
	t.t = function (e, a) {
		if (1 & a && (e = t(e)), 8 & a)
			return e;
		if (4 & a && "object" == typeof e && e && e.__esModule)
			return e;
		var n = Object.create(null);
		if (t.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: e
			}), 2 & a && "string" != typeof e)
			for (var i in e)
				t.d(n, i, function (a) {
					return e[a]
				}
					.bind(null, i));
		return n
	},
	t.n = function (e) {
		var a = e && e.__esModule ? function () {
			return e.default
		}
		 : function () {
			return e
		};
		return t.d(a, "a", a),
		a
	},
	t.o = function (e, a) {
		return Object.prototype.hasOwnProperty.call(e, a)
	},
	t.p = "",
	t(t.s = 0)
}
([function (e, a, t) {
			"use strict";
			function n(e) {
				for (let a = e.length - 1; a > 0; a--) {
					const t = Math.floor(Math.random() * (a + 1));
					[e[a], e[t]] = [e[t], e[a]]
				}
				return e
			}
			function i(e) {
				return "number" == typeof e ? e : e.reduce((e, a) => e + a)
			}
			t.r(a);
			const r = document.getElementById("last-played-top");
			let s = document.createElement("div");
			function d(e, a, t) {
				return null != a[0].Name && e[0].push(t),
				null != a[1].Name && e[1].push(t),
				e
			}
			function c(e, a, t) {
				return null != a[0].Name && "Hero" == a[0].CardType && e[0].push(t),
				null != a[1].Name && "Hero" == a[0].CardType && e[1].push(t),
				e
			}
			function l(e, a, t) {
				return null != a[0].Name && "Creep" == a[0].CardType && e[0].push(t),
				null != a[1].Name && "Creep" == a[1].CardType && e[1].push(t),
				e
			}
			r.appendChild(s);
			let o = ["Track", "Hip Fire", "Crippling Blow", "Viscous Nasal Goo", "Winter's Curse", "Act of Defiance", "Frostbite", "Coup de Grace", "Mystic Flare", "Intimidation", "Bellow", "Relentless Pursuit", "Viscous Nasal Goo", "Crippling Blow", "Rend Armor", "Grazing Shot", "No Accident", "Slay", "Pick Off", "Assassinate"];
			o = new Map(o.map(e => [e, !0]));
			let m = ["Slay", "Bellow"];
			m = new Map(m.map(e => [e, !0]));
			const f = {
				actionPhase: e => {
					let a;
					n(e.hand);
					e: for (var t = 0; t < e.hand.length; t++)
						if (((a = e.hand[t]).ManaCost || 0) <= u.lanes[J.getCurrentLane()].towers[e.turn].mana[0] && (a.div.ondragstart(new DragEvent({
										setData: null
									})), u.lanes[J.getCurrentLane()].cards.some(A) || "Item" == b.CardType)) {
							if ("Creep" == b.CardType) {
								let a = u.lanes[J.getCurrentLane()].cards.reduce(K, [[], []])[e.turn],
								t = {
									preventDefault: () => {},
									target: (a = u.lanes[J.getCurrentLane()].cards[a[Math.floor(Math.random() * a.length)]][e.turn]).div,
									currentTarget: a.div
								};
								a.drop(t);
								break e
							}
							if ("Improvement" == b.CardType) {
								let e = u.lanes[Math.floor(3 * Math.random())],
								a = {
									preventDefault: () => {},
									target: e.div,
									currentTarget: e.div
								};
								e.drop(a);
								break e
							}
							if ("Spell" == b.CardType || "Item" == b.CardType) {
								let t,
								n = g.get(b.Name);
								if ("Item" == b.CardType && "Consumable" != b.ItemType && (n = "unit"), t = b.CrossLane ? u.lanes[Math.floor(3 * Math.random())] : u.lanes[J.getCurrentLane()], "lane" == n)
									n = t;
								else if ("unit" == n) {
									let i = o.get(a.Name) ? 1 - e.turn : e.turn;
									if ((n = m.get(a.Name) ? t.cards.reduce(l, [[], []])[i] : t.cards.reduce(c, [[], []])[i]).length <= 0)
										break e;
									if (n = t.cards[n[Math.floor(Math.random() * n.length)]][i], "Item" == b.CardType)
										if ("Armor" == b.ItemType) {
											if (n.Armor)
												break e
										} else if ("Accessory" == b.ItemType) {
											if (n.Accessory)
												break e
										} else if ("Weapon" == b.ItemType && n.Weapon)
											break e
								}
								let i = {
									preventDefault: () => {},
									target: n.div,
									currentTarget: n.div
								};
								n.drop(i);
								break e
							}
							break e
						}
					J.getTurn() != e.turn && (a = a.div.cloneNode(!0), s.parentNode.replaceChild(a, s), s = a),
					setTimeout(function () {
						J.getTurn() == e.turn && J.pass()
					}, 300)
				},
				shop: e => {
					for (var a = 0; a < 2; a++) {
						let a = ae,
						t = a[Math.floor(Math.random() * a.length)];
						t = E(V.Cards.find(function (e) {
									return e.Name == t
								}), J.players[e]),
						console.log(t),
						J.players[e].gold >= t.GoldCost && (J.players[e].gold -= t.GoldCost, J.players[e].hand.push(t), J.players[e].handDiv.appendChild(t.div))
					}
					J.infoDisplayUpdate()
				}
			};
			let p = new Map,
			g = new Map;
			function _(e, a, t, n = (() => !0)) {
				e.div.classList.add("glow"),
				J.div.classList.add("target"),
				J.div.addEventListener("click", function i(r) {
					r.stopPropagation();
					let s = r.path || r.composedPath && r.composedPath();
					s || console.log("no path");
					e: {
						if (e != b)
							break e;
						let i,
						r = s.find(function (e) {
								if (e.classList)
									return e.classList.contains("lane")
							});
						if (void 0 != r) {
							if (r = u.lanes.find(function (e) {
										return e.div == r
									}), "card" == a || "empty" == a) {
								if (void 0 == (i = s.find(function (e) {
												if (e.classList)
													return e.classList.contains("playarea")
												})))break e;
								i = r.playAreas.findIndex(function (e) {
										return e == i
									})
							} else if ("tower" == a) {
								if (void 0 == (i = s.find(function (e) {
												if (e.classList)
													return e.classList.contains("tower")
												})))break e;
								i = r.towers.findIndex(function (e) {
										return e.div == i
									})
							}
							if ("card" == a) {
								if (void 0 == (a = s.find(function (e) {
												if (e.classList)
													return e.classList.contains("card")
												})))break e;
								a = r.cards.findIndex(function (e) {
										return e[i].div == a
									})
							} else if ("empty" == a) {
								if (void 0 == (a = s.find(function (e) {
												if (e.classList)
													return e.classList.contains("blank")
												})))break e;
								a = r.cards.findIndex(function (e) {
										return e[i].div == a
									})
							} else
								"tower" == a && (a = i);
							n(r, i, a) && (t(r, i, a), u.lanes[J.getCurrentLane()].towers[J.getTurn()].mana[0] -= e.ManaCost, u.lanes[J.getCurrentLane()].towers[J.getTurn()].updateDisplay(), J.players[J.getTurn()].hand.splice(J.players[J.getTurn()].hand.indexOf(b), 1), b.div.parentNode.removeChild(b.div), J.nextTurn())
						}
					}
					e.div.classList.remove("glow"),
					J.div.classList.remove("target"),
					J.div.removeEventListener("click", i, !0)
				}, !0)
			}
			g.set("Dimensional Portal", "lane"),
			p.set("Dimensional Portal", function (e, a) {
				let t = [[], []];
				a = u.lanes[a];
				for (let e = 0; e < 3; e++) {
					let e = E(V.Cards.find(function (e) {
								return "Melee Creep" == e.Name
							}), J.players[J.getTurn()]);
					t[J.getTurn()].push(e)
				}
				return a.summon(t),
				!0
			}),
			g.set("Better Late Than Never", "lane"),
			p.set("Better Late Than Never", function (e, a) {
				let t = [[], []];
				a = u.lanes[a];
				for (let e = 0; e < 1; e++) {
					let e = E(V.Cards.find(function (e) {
								return "Melee Creep" == e.Name
							}), J.players[J.getTurn()]);
					t[J.getTurn()].push(e)
				}
				return a.summon(t),
				!0
			}),
			g.set("Call the Reserves", "lane"),
			p.set("Call the Reserves", function (e, a) {
				let t = [[], []];
				a = u.lanes[a];
				for (let e = 0; e < 2; e++) {
					let e = E(V.Cards.find(function (e) {
								return "Melee Creep" == e.Name
							}), J.players[J.getTurn()]);
					t[J.getTurn()].push(e)
				}
				return a.summon(t),
				!0
			}),
			g.set("Iron Branch Protection", "unit"),
			p.set("Iron Branch Protection", function (e, a, t, n) {
				return u.lanes[a].cards[n][t].currentArmor[5] += 3,
				u.lanes[a].cards[n][t].updateDisplay(),
				!0
			}),
			g.set("Avernus' Blessing", "unit"),
			p.set("Avernus' Blessing", function (e, a, t, n) {
				return u.lanes[a].cards[n][t].currentAttack[1 + (1 - t == J.getTurn())] += 2,
				u.lanes[a].cards[n][t].updateDisplay(),
				!0
			}),
			g.set("Double Edge", "unit"),
			p.set("Double Edge", function (e, a, t, n) {
				return "Strength" == u.lanes[a].cards[n][t].Color && "Hero" == u.lanes[a].cards[n][t].CardType && (u.lanes[a].cards[n][t].currentArmor[3] -= 8, u.lanes[a].cards[n][t].currentAttack[3] += 8, u.lanes[a].cards[n][t].updateDisplay(), !0)
			}),
			g.set("Poised to Strike", "unit"),
			p.set("Poised to Strike", function (e, a, t, n) {
				return "Strength" == u.lanes[a].cards[n][t].Color && "Hero" == u.lanes[a].cards[n][t].CardType && (u.lanes[a].cards[n][t].currentAttack[3] += 4, u.lanes[a].cards[n][t].updateDisplay(), !0)
			}),
			g.set("Defensive Stance", "unit"),
			p.set("Defensive Stance", function (e, a, t, n) {
				return "Hero" == u.lanes[a].cards[n][t].CardType && (u.lanes[a].cards[n][t].currentArmor[5] += 3, u.lanes[a].cards[n][t].updateDisplay(), !0)
			}),
			g.set("Combat Training", "unit"),
			p.set("Combat Training", function (e, a, t, n) {
				return "Hero" == u.lanes[a].cards[n][t].CardType && (u.lanes[a].cards[n][t].currentAttack[1 + (1 - t == J.getTurn())] += 2, u.lanes[a].cards[n][t].updateDisplay(), !0)
			}),
			g.set("Collateral Damage", "unit"),
			p.set("Collateral Damage", function (e, a, t, n) {
				return "Hero" == u.lanes[a].cards[n][t].CardType && "Strength" == u.lanes[a].cards[n][t].Color && (u.lanes[a].cards[n][t].siege[1 + (1 - t == J.getTurn())] += 3, u.lanes[a].cards[n][t].updateDisplay(), !0)
			}),
			g.set("Overpower", "unit"),
			p.set("Overpower",  function (e, a, t, n) {
				return "Agility" == u.lanes[a].cards[n][t].Color && "Hero" == u.lanes[a].cards[n][t].CardType && t === J.getTurn() && (_(b, "card", function (e, i, r) {
						z(a, t, n, u.lanes.indexOf(e), i, r, !1),
						z(a, t, n, u.lanes.indexOf(e), i, r, !1),
						u.lanes[a].collapse()
					}, function (e, t, n) {
						return e == u.lanes[a]
					}), !1)
			}),
			g.set("God's Strength", "unit"),
			p.set("God's Strength", function (e, a, t, n) {
				return "Strength" == u.lanes[a].cards[n][t].Color && "Hero" == u.lanes[a].cards[n][t].CardType && (u.lanes[a].cards[n][t].currentAttack[1 + (1 - t == J.getTurn())] += 4, u.lanes[a].cards[n][t].updateDisplay(), !0)
			}),
			g.set("Spring the Trap", "lane"),
			p.set("Spring the Trap", function (e, a) {
				let t = [[], []];
				a = u.lanes[a];
				for (let e = 0; e < 2; e++) {
					let e = E(V.Cards.find(function (e) {
								return "Centaur Hunter" == e.Name
							}), J.players[J.getTurn()]);
					t[J.getTurn()].push(e)
				}
				return a.summon(t),
				!0
			}),
			g.set("Strafing Run", "lane"),
			p.set("Strafing Run", function (e, a) {
				let t = u.lanes[a],
				n = J.getTurn();
				return t.cards.forEach(function (e) {
					null != e[1 - n].Name && "Creep" == e[1 - n].CardType && (e[1 - n].currentHealth[0] -= 2 - i(e[1 - n].currentArmor))
				}),
				t.collapse(),
				!0
			}),
			g.set("Lightning Strike", "lane"),
			p.set("Lightning Strike", function (e, a) {
				let t = u.lanes[a],
				n = J.getTurn();
				return t.towers[1 - n].currentHealth[0] -= 6 - i(t.towers[1 - n].currentArmor),
				t.towers[1 - n].updateDisplay(),
				!0
			}),
			g.set("Rolling Storm", "lane"),
			p.set("Rolling Storm", function (e, a) {
				let t = J.getTurn();
				return u.lanes.forEach(function (e) {
					e.towers[t].currentHealth[0] -= 2 - i(e.towers[t].currentArmor),
					e.towers[t].updateDisplay(),
					e.towers[1 - t].currentHealth[0] -= 2 - i(e.towers[1 - t].currentArmor),
					e.towers[1 - t].updateDisplay()
				}),
				!0
			}),
			g.set("Tower Barrage", "lane"),
			p.set("Tower Barrage", function (e, a) {
				let t = u.lanes[a],
				n = J.getTurn();
				return t.cards.forEach(function (e) {
					null != e[1 - n].Name && (e[1 - n].currentHealth[0] -= 2 - i(e[1 - n].currentArmor))
				}),
				t.collapse(),
				!0
			}),
			g.set("Foresight", "lane"),
			p.set("Foresight", function (e, a) {
				let t = J.players[J.getTurn()];
				return t.draw(),
				t.draw(),
				!0
			}),
			g.set("Prey on the Weak", "lane"),
			p.set("Prey on the Weak", function (e, a) {
				let t = u.lanes[a],
				n = [[], []],
				i = J.getTurn();
				return t.cards.forEach(function (e) {
					if (null != e[1 - i].Name && e[1 - i].currentHealth[0] < e[1 - i].Health) {
						let e = E(V.Cards.find(function (e) {
									return "Hound of War" == e.Name
								}), J.players[J.getTurn()]);
						n[J.getTurn()].push(e)
					}
					if (null != e[i].Name && e[i].currentHealth[0] < e[i].Health) {
						let e = E(V.Cards.find(function (e) {
									return "Hound of War" == e.Name
								}), J.players[J.getTurn()]);
						n[J.getTurn()].push(e)
					}
				}),
				t.summon(n),
				!0
			}),
			g.set("Remote Detonation", "lane"),
			p.set("Remote Detonation", function (e, a) {
				let t = u.lanes[a],
				n = J.getTurn();
				return t.cards.forEach(function (e) {
					null != e[1 - n].Name && null == e[n].Name && (e[1 - n].currentHealth[0] -= 5 - i(e[1 - n].currentArmor))
				}),
				t.collapse(),
				!0
			}),
			g.set("Thunderstorm", "lane"),
			p.set("Thunderstorm", function (e, a) {
				let t = u.lanes[a],
				n = J.getTurn();
				return t.cards.forEach(function (e) {
					null != e[1 - n].Name && (e[1 - n].currentHealth[0] -= 4 - i(e[1 - n].currentArmor))
				}),
				t.collapse(),
				!0
			}),
			g.set("Bolt of Damocles", "lane"),
			p.set("Bolt of Damocles", function (e, a) {
				let t = u.lanes[a],
				n = J.getTurn();
				return t.towers[1 - n].currentHealth[0] -= 20 - i(t.towers[1 - n].currentArmor),
				t.towers[1 - n].updateDisplay(),
				!0
			}),
			g.set("Stars Align", "lane"),
			p.set("Stars Align", function (e, a) {
				let t = u.lanes[a],
				n = J.getTurn();
				return t.towers[n].mana[0] += 3,
				t.towers[n].updateDisplay(),
				!0
			}),
			g.set("Bellow", "unit"),
			p.set("Bellow", function (e, a, t, n) {
				let i = [[], []];
				if ("Creep" != u.lanes[a].cards[n][t].CardType)
					return !1;
				let r = u.lanes[a].cards[n][t],
				s = w(a);
				return u.lanes[a].cards[n][t] = s,
				r.div.parentNode.replaceChild(s.div, r.div),
				i[t].push(r),
				u.lanes[(a + Math.ceil(2 * Math.random())) % 3].summon(i),
				!0
			}),
			g.set("Rumusque Blessing", "lane"),
			p.set("Rumusque Blessing", function (e, a) {
				let t = u.lanes[a],
				n = J.getTurn();
				return t.cards.forEach(function (e) {
					null != e[n].Name && (e[n].currentHealth[1] += 3, e[n].updateDisplay())
				}),
				!0
			}),
			g.set("Defensive Bloom", "lane"),
			p.set("Defensive Bloom", function (e, a) {
				let t = [[], []];
				a = u.lanes[a];
				for (let e = 0; e < 2; e++) {
					let e = E(V.Cards.find(function (e) {
								return "Roseleaf Wall" == e.Name
							}), J.players[J.getTurn()]);
					t[J.getTurn()].push(e)
				}
				return a.summon(t),
				!0
			}),
			g.set("Restoration Effort", "lane"),
			p.set("Restoration Effort", function (e, a) {
				let t = u.lanes[a],
				n = J.getTurn();
				return t.towers[n].currentHealth[0] += 8,
				t.towers[n].currentHealth[0] > 40 && (t.towers[n].currentHealth[0] = 40),
				t.towers[n].updateDisplay(),
				!0
			}),
			g.set("Intimidation", "unit"),
			p.set("Intimidation", function (e, a, t, n) {
				let i = [[], []],
				r = u.lanes[a].cards[n][t],
				s = w(a);
				return u.lanes[a].cards[n][t] = s,
				r.div.parentNode.replaceChild(s.div, r.div),
				i[t].push(r),
				u.lanes[(a + Math.ceil(2 * Math.random())) % 3].summon(i),
				!0
			}),
			g.set("Curse of Atrophy", "lane"),
			p.set("Curse of Atrophy", function (e, a) {
				let t = u.lanes[a],
				n = J.getTurn();
				return t.cards.forEach(function (e) {
					null != e[1 - n].Name && "Hero" == e[1 - n].CardType && (e[1 - n].currentAttack[2] -= 2, e[1 - n].updateDisplay())
				}),
				!0
			}),
			g.set("Grazing Shot", "unit"),
			p.set("Grazing Shot", function (e, a, t, n) {
				let r = u.lanes[a];
				return r.cards[n][t].currentHealth[0] -= 2 - i(r.cards[n][t].currentArmor),
				r.collapse(),
				!0
			}),
			g.set("Mana Drain", "lane"),
			p.set("Mana Drain", function (e, a) {
				let t = u.lanes[a],
				n = J.getTurn();
				return t.towers[n].mana[0] += 2,
				t.towers[n].updateDisplay(),
				t.towers[1 - n].mana[0] -= 2,
				t.towers[1 - n].updateDisplay(),
				!0
			}),
			g.set("No Accident", "unit"),
			p.set("No Accident", function (e, a, t, n) {
				let r = u.lanes[a];
				return r.cards[n][t].currentHealth[0] -= 3 - i(r.cards[n][t].currentArmor),
				r.collapse(),
				!0
			}),
			g.set("Payday", "lane"),
			p.set("Payday", function (e, a) {
				return J.players[J.getTurn()].gold *= 2,
				J.infoDisplayUpdate(),
				!0
			}),
			g.set("Slay", "unit"),
			p.set("Slay", function (e, a, t, n) {
				let i = u.lanes[a];
				return "Creep" == i.cards[n][t].CardType && (J.condemn(i.cards[n][t], u.lanes[a]), J.infoDisplayUpdate(), i.collapse(), !0)
			}),
			g.set("Arcane Censure", "lane"),
			p.set("Arcane Censure", function (e, a) {
				let t = u.lanes[a],
				n = J.getTurn();
				return t.towers[1 - n].mana[1] -= 1,
				t.towers[1 - n].mana[0] -= 1,
				t.towers[1 - n].updateDisplay(),
				!0
			}),
			g.set("Pick Off", "unit"),
			p.set("Pick Off", function (e, a, t, n) {
				let r = u.lanes[a];
				return r.cards[n][t].currentHealth[0] -= 4 - i(r.cards[n][t].currentArmor),
				r.collapse(),
				!0
			}),
			g.set("Assassinate", "unit"),
			p.set("Assassinate", function (e, a, t, n) {
				let r = u.lanes[a];
				return r.cards[n][t].currentHealth[0] -= 10 - (i(r.cards[n][t].currentArmor) < 0 ? i(r.cards[n][t].currentArmor) : 0),
				r.collapse(),
				!0
			}),
			g.set("New Orders", "unit"),
			p.set("New Orders", function (e, a, t, n) {
				let i = u.lanes[a],
				r = i.cards[n][t];
				return t == J.getTurn() && (_(b, "card", function (e, a, t) {
						r.arrow = t - n,
						r.updateDisplay()
					}, function (e, a, r) {
						return e == i && J.players[t] != a && Math.abs(r - n) <= 1
					}), !1)
			}),
			g.set("Battlefield Control", "unit"),
			p.set("Battlefield Control", function (e, a, t, n) {
				let i = u.lanes[a],
				r = i.cards[n][t];
				return _(b, "card", function (e, a, t) {
					r.arrow = t - n,
					r.updateDisplay()
				}, function (e, a, r) {
					return e == i && J.players[t] != a && Math.abs(r - n) <= 1
				}),
				!1
			}),
			g.set("Murder Plot", "unit"),
			p.set("Murder Plot", function (e, a, t, n) {
				let i = u.lanes[a],
				r = i.cards[n][t];
				return "Hero" == u.lanes[a].cards[n][t].CardType && "Agility" == u.lanes[a].cards[n][t].Color && (_(b, "card", function (e, a, t) {
						r.arrow = t - n,
						r.currentAttack[3] += 8,
						r.updateDisplay()
					}, function (e, a, r) {
						return e == i && J.players[t] != a && Math.abs(r - n) <= 1
					}), !1)
			}),
			g.set("Steal Strength", "unit"),
			p.set("Steal Strength", function (e, a, t, n) {
				let i = u.lanes[a],
				r = i.cards[n][t];
				return _(b, "card", function (e, a, t) {
					r.currentAttack[3] -= 4,
					r.updateDisplay();
					let n = e.cards[t][a];
					n.currentAttack[3] += 4,
					n.updateDisplay()
				}, function (e, a, t) {
					return e == i
				}),
				!1
			}),
			g.set("Ion Shell", "unit"),
			p.set("Ion Shell", function (e, a, t, n) {
				return u.lanes[a].cards[n][t].retaliate[1 + (1 - t == J.getTurn())] += 3,
				u.lanes[a].cards[n][t].updateDisplay(),
				!0
			}),
			g.set("Forward Charge", "lane"),
			p.set("Forward Charge", function (e, a) {
				let t = u.lanes[a],
				n = J.getTurn();
				return t.cards.forEach(function (e) {
					null != e[n].Name && (e[n].siege[3] += 2, e.arrow = 0, e[n].updateDisplay())
				}),
				!0
			}),
			g.set("Time of Triumph", "lane"),
			p.set("Time of Triumph", function (e, a) {
				let t = u.lanes[a],
				n = J.getTurn();
				return t.cards.forEach(function (e) {
					null != e[n].Name && "Hero" == e[n].CardType && (e[n].currentAttack[1] += 4, e[n].currentArmor[1] += 4, e[n].currentHealth[1] += 4, e[n].cleave[1] += 4, e[n].retaliate[1] += 4, e[n].siege[1] += 4, e[n].updateDisplay())
				}),
				!0
			}),
			g.set("Fighting Instinct", "unit"),
			p.set("Fighting Instinct", function (e, a, t, n) {
				return "Strength" == u.lanes[a].cards[n][t].Color && "Hero" == u.lanes[a].cards[n][t].CardType && (u.lanes[a].cards[n][t].currentArmor[1] += 1, u.lanes[a].cards[n][t].currentAttack[1] += 1, u.lanes[a].cards[n][t].updateDisplay(), !0)
			}),
			g.set("Moon Glaves", "lane"),
			p.set("Moon Glaves", function (e, a) {
				let t = u.lanes[a],
				n = J.getTurn();
				return t.cards.forEach(function (e) {
					null != e[n].Name && "Hero" == e[n].CardType && (e[n].cleave[1] += 5, e[n].updateDisplay())
				}),
				!0
			}),
			g.set("Siege Units", "lane"),
			p.set("Siege Units", function (e, a) {
				let t = [[], []];
				a = u.lanes[a];
				for (let e = 0; e < 2; e++) {
					let e = E(V.Cards.find(function (e) {
								return "Oglodi Catapult" == e.Name
							}), J.players[J.getTurn()]);
					t[J.getTurn()].push(e)
				}
				return a.summon(t),
				!0
			}),
			g.set("Mystic Flare", "unit"),
			p.set("Mystic Flare", function (e, a, t, n) {
				let r = u.lanes[a];
				for (var s = 0; s < 12; )
					for (var d = -1; d <= 1; d++)
						null != r.cards[n + d] && null != r.cards[n + d][t].Name && (r.cards[n + d][t].currentHealth[0] -= 2, s += 2);
				for (d = -1; d <= 1; d++)
					null != r.cards[n + d] && null != r.cards[n + d][t].Name && (r.cards[n + d][t].currentHealth[0] += i(r.cards[n + d][t].currentArmor), r.cards[n + d][t].updateDisplay());
				return r.collapse(),
				!0
			}),
			g.set("Coup de Grace", "unit"),
			p.set("Coup de Grace", function (e, a, t, n) {
				let i = u.lanes[a];
				if ("Hero" != i.cards[n][t].CardType)
					return !1;
				J.condemn(i.cards[n][t], u.lanes[a]),
				J.infoDisplayUpdate(),
				i.collapse();
				let r = J.players[J.getTurn()].hand;
				if (r.length > 1) {
					let e = Math.floor(Math.random() * r.length);
					r[e] == b && (e = (e + 1) % r.length),
					(e = r.splice(e, 1)[0]).div.parentNode.removeChild(e.div)
				}
				return !0
			}),
			g.set("Berserker's Call", "unit"),
			p.set("Berserker's Call", function (e, a, t, n) {
				if ("Strength" != u.lanes[a].cards[n][t].Color || "Hero" != u.lanes[a].cards[n][t].CardType || t !== J.getTurn())
					return !1;
				J.dispatchEvent("whenAttacking");
				const i = u.lanes[a];
				for (var r = -1; r <= 1; r++)
					null != i.cards[n + r] && null != i.cards[n + r][1 - t].Name && z(a, t, n, a, 1 - t, n + r, !1);
				return i.collapse(),
				!0
			}),
			g.set("Duel", "unit"),
			p.set("Duel", function (e, a, t, n) {
				return "Strength" == u.lanes[a].cards[n][t].Color && "Hero" == u.lanes[a].cards[n][t].CardType && t === J.getTurn() && (_(b, "card", function (e, i, r) {
						z(a, t, n, u.lanes.indexOf(e), i, r, !1),
						u.lanes[a].collapse()
					}, function (e, t, n) {
						return e == u.lanes[a]
					}), !1)
			}),
			g.set("Gank", "unit"),
			p.set("Gank", function (e, a, t, n) {
				return a == J.getCurrentLane() && "Agility" == u.lanes[a].cards[n][t].Color && "Hero" == u.lanes[a].cards[n][t].CardType && t === J.getTurn() && (_(b, "card", function (e, i, r) {
						z(a, t, n, u.lanes.indexOf(e), i, r, !1),
						u.lanes[a].collapse(),
						e.collapse(),
						J.infoDisplayUpdate()
					}, function (e, a, t) {
						return !0
					}), !1)
			}),
			g.set("Frostbite", "unit"),
			p.set("Frostbite", function (e, a, t, n) {
				let r = u.lanes[a];
				return r.cards[n][t].currentHealth[0] -= 2 - i(r.cards[n][t].currentArmor),
				r.cards[n][t].disarmed = !0,
				r.collapse(),
				!0
			}),
			g.set("Act of Defiance", "unit"),
			p.set("Act of Defiance", function (e, a, t, n) {
				return u.lanes[a].cards[n][t].silenced = !0,
				!0
			}),
			g.set("Gust", "lane"),
			p.set("Gust", function (e, a) {
				let t = u.lanes[a],
				n = J.getTurn();
				return t.cards.forEach(function (e) {
					null != e[1 - n].Name && "Hero" == e[1 - n].CardType && (e[1 - n].silenced = !0)
				}),
				!0
			}),
			g.set("Winter's Curse", "unit"),
			p.set("Winter's Curse", function (e, a, t, n) {
				u.lanes[a].cards[n][t].disarmed = !0,
				J.dispatchEvent("whenAttacking");
				const i = u.lanes[a];
				for (var r = -1; r <= 1; r += 2)
					null != i.cards[n + r] && null != i.cards[n + r][t].Name && z(a, t, n, a, t, n + r, !1);
				return i.collapse(),
				!0
			}),
			g.set("Enchant Totem", "unit"),
			p.set("Enchant Totem", function (e, a, t, n) {
				return "Strength" == u.lanes[a].cards[n][t].Color && "Hero" == u.lanes[a].cards[n][t].CardType && (u.lanes[a].cards[n][t].currentAttack[3] += 8, u.lanes[a].cards[n][t].updateDisplay(), !0)
			}),
			g.set("Healing Salve", "unit"),
			p.set("Healing Salve", function (e, a, t, n) {
				let i = u.lanes[a];
				return i.cards[n][t].currentHealth[0] += 6,
				i.cards[n][t].currentHealth[0] > i.cards[n][t].Health && (i.cards[n][t].currentHealth[0] = i.cards[n][t].Health),
				i.cards[n][t].updateDisplay(),
				!0
			}),
			g.set("Fountain Flask", "unit"),
			p.set("Fountain Flask", function (e, a, t, n) {
				let i = u.lanes[a];
				return i.cards[n][t].currentHealth[0] = i.cards[n][t].Health,
				i.cards[n][t].updateDisplay(),
				!0
			}),
			g.set("Potion of Knowledge", "lane"),
			p.set("Potion of Knowledge", function (e, a, t, n) {
				return J.players[J.getTurn()].draw(),
				!0
			}),
			g.set("Town Portal Scroll", "unit"),
			p.set("Town Portal Scroll", function (e, a, t, n) {
				if ("Hero" != u.lanes[a].cards[n][t].CardType || t != J.getTurn())
					return !1;
				let i = u.lanes[a].cards[n][t],
				r = w(a);
				return i.div.parentNode.replaceChild(r.div, i.div),
				u.lanes[a].cards[n][t] = r,
				i.respawn = 0,
				i.currentHealth[0] = i.Health,
				i.updateDisplay(),
				!0
			}),
			g.set("Pick a Fight", "unit"),
			p.set("Pick a Fight", function (e, a, t, n) {
				let i = u.lanes[a],
				r = i.cards[n][t];
				return "Hero" == i.cards[n][t].CardType && t == J.getTurn() && (_(b, "card", function (e, a, s) {
						r.arrow = s - n;
						for (var d = -1; d <= 1; d++)
							null != i.cards[n + d] && null != i.cards[n + d][1 - t].Name && (i.cards[n + d][1 - t].arrow = -1 * d, i.cards[n + d][1 - t].updateDisplay());
						r.updateDisplay()
					}, function (e, a, r) {
						return e == i && J.players[t] != a && Math.abs(r - n) <= 1
					}), !1)
			}),
			g.set("Viscous Nasal Goo", "unit"),
			p.set("Viscous Nasal Goo", function (e, a, t, n) {
				return u.lanes[a].cards[n][t].currentArmor[2] -= 2,
				u.lanes[a].cards[n][t].updateDisplay(),
				!0
			}),
			g.set("Fight Through the Pain", "unit"),
			p.set("Fight Through the Pain", function (e, a, t, n) {
				return "Strength" == u.lanes[a].cards[n][t].Color && "Hero" == u.lanes[a].cards[n][t].CardType && (u.lanes[a].cards[n][t].currentArmor[3] += 2, J.gianInitiative(), u.lanes[a].cards[n][t].updateDisplay(), !0)
			}),
			g.set("Kraken Shell", "unit"),
			p.set("Kraken Shell", function (e, a, t, n) {
				return "Strength" == u.lanes[a].cards[n][t].Color && "Hero" == u.lanes[a].cards[n][t].CardType && (u.lanes[a].cards[n][t].currentArmor[1] += 1, J.gianInitiative(), u.lanes[a].cards[n][t].updateDisplay(), !0)
			}),
			g.set("Rend Armor", "unit"),
			p.set("Rend Armor", function (e, a, t, n) {
				return u.lanes[a].cards[n][t].currentArmor[1] -= i(u.lanes[a].cards[n][t].currentArmor),
				u.lanes[a].cards[n][t].updateDisplay(),
				!0
			}),
			g.set("Clear The Deck", "lane"),
			p.set("Clear The Deck", function (e, a) {
				let t = u.lanes[a],
				n = J.getTurn();
				return t.cards.forEach(function (e) {
					null != e[n].Name && "Hero" == e[n].CardType && (e[n].cleave[3] += 4, e[n].updateDisplay())
				}),
				!0
			}),
			g.set("Crippling Blow", "unit"),
			p.set("Crippling Blow", function (e, a, t, n) {
				return u.lanes[a].cards[n][t].currentAttack[2] -= 2,
				u.lanes[a].cards[n][t].updateDisplay(),
				!0
			}),
			g.set("Diabolic Revelation", "lane"),
			p.set("Diabolic Revelation", function (e, a) {
				let t = J.players[J.getTurn()];
				return t.draw(),
				t.draw(),
				t = J.getTurn(),
				u.lanes.forEach(function (e) {
					e.cards.forEach(function (e) {
						null != e[t].Name && (e[t].currentHealth[0] -= 2 - i(e[t].currentArmor))
					}),
					e.collapse()
				}),
				!0
			}),
			g.set("Ventriloquy", "unit"),
			p.set("Ventriloquy", function (e, a, t, n) {
				let i = u.lanes[a],
				r = i.cards[n][t];
				for (var s = -1; s <= 1; s++)
					null != i.cards[n + s] && null != i.cards[n + s][1 - t].Name && (i.cards[n + s][1 - t].arrow = -1 * s, i.cards[n + s][1 - t].updateDisplay());
				r.updateDisplay()
			}),
			g.set("Cunning Plan", "unit"),
			p.set("Cunning Plan", function (e, a, t, n) {
				let i = u.lanes[a],
				r = i.cards[n][t];
				return _(b, "card", function (e, a, s) {
					J.players[J.getTurn()].draw();
					let d = n > s ? r.div.nextSibling : e.cards[s][a].div.nextSibling;
					n > s ? e.cards[s][a].div.parentNode.insertBefore(r.div, e.cards[s][a].div) : r.div.parentNode.insertBefore(e.cards[s][a].div, r.div),
					n > s ? r.div.parentNode.insertBefore(e.cards[s][a].div, d) : e.cards[s][a].div.parentNode.insertBefore(r.div, d);
					let c = e.cards[s][a];
					e.cards[s][a] = i.cards[n][t],
					i.cards[n][t] = c,
					null != i.cards[n][1 - t].Name && (i.cards[n][t].arrow = 0, i.cards[n][t].updateDisplay()),
					null != e.cards[s][1 - a].Name && (e.cards[s][a].arrow = 0, e.cards[s][a].updateDisplay())
				}, function (e, a, r) {
					return e == i && t == a && (n == r - 1 || n == r + 1)
				}),
				!1
			}),
			g.set("Juke", "unit"),
			p.set("Juke", function (e, a, t, n) {
				if (t != J.getTurn())
					return !1;
				let i = u.lanes[a],
				r = i.cards[n][t];
				return _(b, "card", function (e, a, s) {
					let d = n > s ? r.div.nextSibling : e.cards[s][a].div.nextSibling;
					n > s ? e.cards[s][a].div.parentNode.insertBefore(r.div, e.cards[s][a].div) : r.div.parentNode.insertBefore(e.cards[s][a].div, r.div),
					n > s ? r.div.parentNode.insertBefore(e.cards[s][a].div, d) : e.cards[s][a].div.parentNode.insertBefore(r.div, d);
					let c = e.cards[s][a];
					e.cards[s][a] = i.cards[n][t],
					i.cards[n][t] = c,
					null != i.cards[n][1 - t].Name && (i.cards[n][t].arrow = 0, i.cards[n][t].updateDisplay()),
					null != e.cards[s][1 - a].Name && (e.cards[s][a].arrow = 0, e.cards[s][a].updateDisplay())
				}, function (e, a, r) {
					return e == i && t == a && (n == r - 1 || n == r + 1)
				}),
				!1
			}),
			g.set("Whispers of Madness", "unit"),
			p.set("Whispers of Madness", function (e, a, t, n) {
				return t != J.getTurn() && (u.lanes[a].cards[n][t].silenced = !0, u.lanes[a].cards[n][t].disarmed = !0, u.lanes[a].cards[n][t].updateDisplay(), u.lanes.forEach(function (e) {
						e.cards.forEach(function (e) {
							null != e[1 - t].Name && "Hero" == e[1 - t].CardType && (e[1 - t].silenced = !0, e[1 - t].disarmed = !0, e[1 - t].updateDisplay())
						})
					}), !0)
			}),
			g.set("At Any Cost", "lane"),
			p.set("At Any Cost", function (e, a) {
				let t = u.lanes[a],
				n = J.getTurn();
				return t.cards.forEach(function (e) {
					null != e[1 - n].Name && (e[1 - n].currentHealth[0] -= 6 - i(e[1 - n].currentArmor)),
					null != e[n].Name && (e[n].currentHealth[0] -= 6 - i(e[n].currentArmor))
				}),
				t.collapse(),
				!0
			}),
			g.set("Annihilation", "lane"),
			p.set("Annihilation", function (e, a) {
				let t = u.lanes[a],
				n = J.getTurn();
				return t.cards.forEach(function (e, a) {
					null != e[n].Name && J.condemn(t.cards[a][n], t),
					null != e[1 - n].Name && J.condemn(t.cards[a][1 - n], t)
				}),
				t.collapse(),
				!0
			}),
			g.set("Compel", "unit"),
			p.set("Compel", function (e, a, t, n) {
				let i = u.lanes[a],
				r = i.cards[n][t];
				return _(b, "card", function (e, a, t) {
					r.arrow = t - n,
					r.updateDisplay(),
					J.players[J.getTurn()].draw()
				}, function (e, a, r) {
					return e == i && J.players[t] != a && Math.abs(r - n) <= 1
				}),
				!1
			}),
			g.set("Arcane Assault", "lane"),
			p.set("Arcane Assault", function (e, a) {
				let t = u.lanes[a],
				n = J.getTurn();
				return t.towers[1 - n].currentHealth[0] -= 2 - i(t.towers[1 - n].currentArmor),
				t.towers[1 - n].updateDisplay(),
				J.players[n].draw(),
				J.gianInitiative(),
				!0
			}),
			g.set("Fog of War", "lane"),
			p.set("Fog of War", function (e, a) {
				let t = u.lanes[a],
				n = J.getTurn();
				return t.cards.forEach(function (e) {
					null != e[1 - n].Name && Math.random() < .5 && (e[1 - n].disarmed = !0)
				}),
				t.collapse(),
				!0
			}),
			g.set("Friendly Fire", "unit"),
			p.set("Friendly Fire", function (e, a, t, n) {
				return t != J.getTurn() && (_(b, "card", function (e, i, r) {
						z(a, t, n, u.lanes.indexOf(e), i, r, !1),
						u.lanes[a].collapse()
					}, function (e, n, i) {
						return u.lanes[a],
						n == t
					}), !1)
			}),
			g.set("Lodestone Demolition", "lane"),
			p.set("Lodestone Demolition", function (e, a) {
				let t = u.lanes[a],
				n = 0,
				r = J.getTurn();
				return t.cards.forEach(function (e) {
					null != e[1 - r].Name && (n += i(e[1 - r].currentArmor))
				}),
				t.towers[1 - r].currentHealth[0] -= n - i(t.towers[1 - r].currentArmor),
				t.towers[1 - r].updateDisplay(),
				!0
			}),
			g.set("Hip Fire", "unit"),
			p.set("Hip Fire", function (e, a, t, n) {
				let r = u.lanes[a];
				return r.cards[n][t].currentHealth[0] -= 4 - i(r.cards[n][t].currentArmor),
				r.collapse(),
				J.gianInitiative(),
				!0
			}),
			g.set("The Cover of Night", "unit"),
			p.set("The Cover of Night", function (e, a, t, n) {
				if ("Agility" != u.lanes[a].cards[n][t].Color || "Hero" != u.lanes[a].cards[n][t].CardType || t != J.getTurn())
					return !1;
				let i = [[], []],
				r = u.lanes[a].cards[n][t],
				s = w(a);
				return _(b, "lane", function (e) {
					u.lanes[a].cards[n][t] = s,
					r.div.parentNode.replaceChild(s.div, r.div),
					r.currentAttack[5] += 4,
					r.siege[5] += 7,
					i[t].push(r),
					console.log(e),
					e.summon(i)
				}, function (e) {
					return e != a
				}),
				!1
			}),
			g.set("Arm the Rebellion", "lane"),
			p.set("Arm the Rebellion", function (e, a) {
				let t = u.lanes[a],
				n = J.getTurn();
				return t.cards.forEach(function (e) {
					null != e[n].Name && "Creep" == e[n].CardType && (e[n].currentAttack += 2, e[n].currentArmor += 1, e[n].updateDisplay())
				}),
				!0
			}),
			g.set("Defend the Weak", "unit"),
			p.set("Defend the Weak", function (e, a, t, n) {
				return u.lanes[a].cards[n][t].div.addEventListener("continuousEffect", function (e) {
					for (var a = -1; a < 2; a += 2) {
						let t = u.lanes[e.detail.lane];
						n = e.detail.card,
						null != t.cards[n + a] && null != t.cards[n + a][e.detail.player].Name && (t.cards[n + a][e.detail.player].currentArmor[4] += 2, t.cards[n + a][e.detail.player].updateDisplay())
					}
				}),
				!0
			}),
			g.set("Allseeing One's Favor", "unit"),
			p.set("Allseeing One's Favor", function (e, a, t, n) {
				if ("Strength" != u.lanes[a].cards[n][t].Color || "Hero" != u.lanes[a].cards[n][t].CardType)
					return !1;
				return u.lanes[a].cards[n][t].div.addEventListener("continuousEffect", function (e) {
					u.lanes[e.detail.lane].cards.forEach(function (a) {
						null != a[e.detail.player].Name && a[e.detail.player] != u.lanes[e.detail.lane].cards[e.detail.card][e.detail.player] && (a[e.detail.player].regen[4] += 2, a[e.detail.player].updateDisplay())
					})
				}),
				!0
			}),
			g.set("Heartstopper Aura", "unit"),
			p.set("Heartstopper Aura", function (e, a, t, n) {
				if ("Intelligence" != u.lanes[a].cards[n][t].Color || "Hero" != u.lanes[a].cards[n][t].CardType)
					return !1;
				let r = u.lanes[a].cards[n][t],
				s = r.abilitiesContainer,
				d = document.createElement("div");
				d.classList.add("ability-container");
				let c = document.createElement("IMG");
				return c.draggable = !1,
				c.src = `../node_modules/artifactdb/assets/artwork/small/${r.FileName}.jpg`,
				c.onerror = function () {
					c.src = "../src/placeholder.png"
				},
				c.title = 'Modify a Intelligence hero with "Deal 2 damage to this hero\'s enemy neighbors before the action phase."',
				d.appendChild(c),
				s.appendChild(d),
				r.div.addEventListener("beforeTheActionPhase", function (e) {
					let a = u.lanes[e.detail.lane],
					t = e.detail.card;
					for (var n = -1; n <= 1; n++)
						a.cards[t + n] && null != a.cards[t + n][1 - e.detail.player].Name && (a.cards[t + n][1 - e.detail.player].currentHealth[0] -= 2 - i(a.cards[t + n][1 - e.detail.player].currentArmor)), a.collapse()
				}),
				!0
			}),
			g.set("Track", "unit"),
			p.set("Track", function (e, a, t, n) {
				return "Hero" == u.lanes[a].cards[n][t].CardType && (u.lanes[a].cards[n][t].Bounty += 10, !0)
			}),
			g.set("Blood Rage", "unit"),
			p.set("Blood Rage", function (e, a, t, n) {
				return u.lanes[a].cards[n][t].silenced = !0,
				u.lanes[a].cards[n][t].currentAttack[3] += 4,
				u.lanes[a].cards[n][t].updateDisplay(),
				!0
			});
			const h = e => {
				let a = document.createElement("div"),
				t = [void 0, void 0],
				n = [void 0, void 0],
				r = [],
				s = [[], []],
				d = [document.createElement("div"), document.createElement("div")];
				d.forEach(function (e, t) {
					e.classList.add("improvement", t ? "top" : "bottom"),
					a.appendChild(e)
				}),
				a.ondragover = function (e) {
					e.preventDefault()
				},
				a.addEventListener("dragenter", function (e) {
					e.target.classList.add("dragover")
				}),
				a.addEventListener("dragleave", function (e) {
					e.target.classList.remove("dragover")
				}),
				a.ondrop = (e => c(e));
				const c = a => {
					a.preventDefault(),
					null != a && a.target.classList.remove("dragover"),
					u.lanes[J.getCurrentLane()].towers[J.getTurn()].mana[0] < b.ManaCost || e != J.getCurrentLane() && !b.CrossLane || "lane" != g.get(b.Name) && "Improvement" != b.CardType || (u.lanes[J.getCurrentLane()].cards.some(A) || "Item" == b.CardType) && ("Improvement" == b.CardType ? (b.div.draggable = !1, s[J.getTurn()].push(b), d[J.getTurn()].appendChild(b.div)) : (p.get(b.Name)(a, e), b.div.parentNode.removeChild(b.div)), u.lanes[J.getCurrentLane()].towers[b.player.turn].mana[0] -= b.ManaCost, u.lanes[J.getCurrentLane()].towers[b.player.turn].updateDisplay(), J.players[b.player.turn].hand.splice(J.players[b.player.turn].hand.indexOf(b), 1), l(), o(), J.dispatchEvent("continuousRefresh"), J.nextTurn())
				},
				l = (a = !0) => {
					r.flat().forEach(function (a) {
						null != a.currentHealth && i(a.currentHealth) <= 0 && J.condemn(a, u.lanes[e])
					});
					let t = !1;
					r.forEach(function (e, a) {
						e.forEach(function (e, t) {
							null != e.Name && null == r[a + e.arrow][1 - t].Name && (e.arrow = 0)
						})
					}),
					r.forEach(function (e, a) {
						null == e[0].Name && null == e[1].Name && (t = !0, e[0].div.parentNode.removeChild(e[0].div), e[1].div.parentNode.removeChild(e[1].div), r.splice(a, 1))
					}),
					t ? l(a) : a && J.dispatchEvent("continuousRefresh")
				},
				o = () => {
					if (0 == r.reduce(K, [[], []])[J.getTurn()].length) {
						let a = [w(e, n[0], r.length), w(e, n[1], r.length)],
						t = [w(e, n[0], 0), w(e, n[1], 0)];
						r.push(a),
						r.unshift(t)
					}
				};
				return {
					name: name,
					div: a,
					cards: r,
					towers: t,
					improvements: s,
					playAreas: n,
					stages: [],
					passCount: 0,
					collapse: l,
					expand: o,
					summon: (a, t = !0) => {
						a.forEach(function (a, t) {
							for (; r.reduce(K, [[], []])[t].length < a.length; ) {
								let a = Math.random() < .5;
								a = a ? n[0].childNodes.length : 0;
								let t = [w(e, n[0], a), w(e, n[1], a)];
								a ? r.push(t) : r.unshift(t)
							}
						}),
						a.forEach(function (a, n) {
							a.forEach(function (a) {
								let i = r.reduce(K, [[], []])[n];
								i = i[Math.floor(Math.random() * i.length)];
								let s = r[i][n].div;
								s.parentNode.replaceChild(a.div, s),
								r[i][n] = a,
								a.arrow = 0,
								null != r[i][1 - n].Name && (r[i][1 - n].arrow = 0),
								t && (a.rndArrow(e, i, n), J.dispatchEvent("continuousRefresh"))
							})
						})
					},
					drop: c
				}
			},
			u = {
				div: document.getElementById("board"),
				lanes: [h(0), h(1), h(2)],
				collapse: () => {
					u.lanes.forEach(function (e) {
						e.collapse(!1)
					}),
					J.dispatchEvent("continuousRefresh")
				}
			};
			let b,
			y = new Map,
			k = new Map;
			function v(e, a, t, n, i = !0) {
				let r = e.Abilities.findIndex(function (e) {
						return e.div == a
					});
				e.Abilities[r].div.classList.add("glow"),
				J.div.classList.add("target"),
				J.div.addEventListener("click", function a(s) {
					s.stopPropagation();
					let d = s.path || s.composedPath && s.composedPath();
					d || console.log("no path");
					e: {
						let a,
						s = d.find(function (e) {
								if (e.classList)
									return e.classList.contains("lane")
							});
						if (void 0 != s) {
							if (s = u.lanes.find(function (e) {
										return e.div == s
									}), "card" == t || "empty" == t) {
								if (void 0 == (a = d.find(function (e) {
												if (e.classList)
													return e.classList.contains("playarea")
												})))break e;
								a = s.playAreas.findIndex(function (e) {
										return e == a
									})
							} else if ("tower" == t) {
								if (void 0 == (a = d.find(function (e) {
												if (e.classList)
													return e.classList.contains("tower")
												})))break e;
								a = s.towers.findIndex(function (e) {
										return e.div == a
									})
							}
							if ("card" == t) {
								if (void 0 == (t = d.find(function (e) {
												if (e.classList)
													return e.classList.contains("card")
												})))break e;
								t = s.cards.findIndex(function (e) {
										return e[a].div == t
									})
							} else if ("empty" == t) {
								if (void 0 == (t = d.find(function (e) {
												if (e.classList)
													return e.classList.contains("blank")
												})))break e;
								t = s.cards.findIndex(function (e) {
										return e[a].div == t
									})
							} else
								"tower" == t && (t = a);
							i(s, a, t) && (n(s, a, t), e.Abilities[r].currentCooldown = e.Abilities[r].Cooldown, e.updateDisplay(), J.nextTurn())
						}
					}
					J.div.classList.remove("target"),
					e.Abilities[r].div.classList.remove("glow"),
					J.div.removeEventListener("click", a, !0)
				}, !0)
			}
			function C(e, a) {
				return e = function () {
					let t = e;
					return function () {
						a(),
						t.apply(this)
					}
				}
				()
			}
			y.set("testAbility", function () {
				console.log("testAbility")
			}),
			k.set("Pack Leadership", "continuousEffect"),
			y.set("Pack Leadership", function (e, a) {
				for (var t = -1; t < 2; t += 2) {
					let e = u.lanes[a.detail.lane],
					n = a.detail.card;
					null != e.cards[n + t] && null != e.cards[n + t][a.detail.player].Name && (e.cards[n + t][a.detail.player].currentArmor[4] += 1, e.cards[n + t][a.detail.player].updateDisplay())
				}
			}),
			k.set("Wisdom of the Elders", "click"),
			y.set("Wisdom of the Elders", function (e, a) {
				return e.player.draw(),
				!0
			}),
			k.set("Work the Knife", "whenAttacking"),
			y.set("Work the Knife", function (e, a) {
				let t = u.lanes[a.detail.lane],
				n = a.detail.card + e.arrow;
				null != t.cards[n] && null != t.cards[n][1 - a.detail.player].Name && "Creep" == t.cards[n][1 - a.detail.player].CardType || (e.currentAttack[4] += 2)
			}),
			k.set("Call of the Wild", "click"),
			y.set("Call of the Wild", function (e, a) {
				let t = [[], []],
				n = u.lanes[J.getCurrentLane()],
				i = E(V.Cards.find(function (e) {
							return "Loyal Beast" == e.Name
						}), J.players[J.getTurn()]);
				return t[J.getTurn()].push(i),
				n.summon(t),
				!0
			}),
			k.set("Return", "continuousEffect"),
			y.set("Return", function (e, a) {
				e.retaliate[4] += 3
			}),
			k.set("Moment of Courage", "continuousEffect"),
			y.set("Moment of Courage", function (e, a) {
				e.retaliate[4] += 2
			}),
			k.set("Sting", "continuousEffect"),
			y.set("Sting", function (e, a) {
				e.retaliate[4] += 1
			}),
			k.set("Basic Retaliate", "continuousEffect"),
			y.set("Basic Retaliate", function (e, a) {
				e.retaliate[4] += 1
			}),
			k.set("Base Retaliate", "continuousEffect"),
			y.set("Base Retaliate", function (e, a) {
				e.retaliate[4] += 3
			}),
			k.set("Concussive Shot", "click"),
			y.set("Concussive Shot", function (e, a) {
				return v(e, a.currentTarget, "card", function (e, a, t) {
					e.cards[t][a].currentArmor[3] -= 2,
					e.cards[t][a].updateDisplay(),
					null != e.cards[t - 1] && null != e.cards[t - 1][a].Name && (e.cards[t - 1][a].currentArmor[3] -= 2, e.cards[t - 1][a].updateDisplay()),
					null != e.cards[t + 1] && null != e.cards[t + 1][a].Name && (e.cards[t + 1][a].currentArmor[3] -= 2, e.cards[t + 1][a].updateDisplay())
				}, function (e, a, t) {
					return e == u.lanes[J.getCurrentLane()] && "Hero" == e.cards[t][a].CardType
				}),
				!1
			}),
			k.set("Nature's Attendants", "continuousEffect"),
			y.set("Nature's Attendants", function (e, a) {
				e.regen[4] += 2,
				e.updateDisplay();
				for (var t = -1; t < 2; t += 2) {
					let e = u.lanes[a.detail.lane],
					n = a.detail.card;
					null != e.cards[n + t] && null != e.cards[n + t][a.detail.player].Name && (e.cards[n + t][a.detail.player].regen[4] += 2, e.cards[n + t][a.detail.player].updateDisplay())
				}
			}),
			k.set("Branches of Iron", "continuousEffect"),
			y.set("Branches of Iron", function (e, a) {
				for (var t = -1; t < 2; t += 2) {
					let e = u.lanes[a.detail.lane],
					n = a.detail.card;
					null != e.cards[n + t] && null != e.cards[n + t][a.detail.player].Name && (e.cards[n + t][a.detail.player].currentArmor[4] += 2, e.cards[n + t][a.detail.player].updateDisplay())
				}
			}),
			k.set("Feral Impulse", "continuousEffect"),
			y.set("Feral Impulse", function (e, a) {
				for (var t = -1; t < 2; t += 2) {
					let e = u.lanes[a.detail.lane],
					n = a.detail.card;
					null != e.cards[n + t] && null != e.cards[n + t][a.detail.player].Name && (e.cards[n + t][a.detail.player].currentAttack[4] += 2, e.cards[n + t][a.detail.player].updateDisplay())
				}
			}),
			k.set("Arctic Burn", "afterCardPlayed"),
			y.set("Arctic Burn", function (e, a) {
				let t = u.lanes[J.getCurrentLane()],
				n = J.getTurn(),
				i = t.cards.findIndex(function (a) {
						return a[n] == e
					});
				return v(e, a.currentTarget, "empty", function (a, r, s) {
					e.currentAttack[3] += 4;
					let d = i > s ? e.div.nextSibling : a.cards[s][r].div.nextSibling;
					i > s ? a.cards[s][r].div.parentNode.insertBefore(e.div, a.cards[s][r].div) : e.div.parentNode.insertBefore(a.cards[s][r].div, e.div),
					i > s ? e.div.parentNode.insertBefore(a.cards[s][r].div, d) : a.cards[s][r].div.parentNode.insertBefore(e.div, d);
					let c = a.cards[s][r];
					a.cards[s][r] = t.cards[i][n],
					t.cards[i][n] = c,
					null != a.cards[s][1 - r].Name && (a.cards[s][1 - r].arrow = 0, e.arrow = 0, a.cards[s][1 - r].updateDisplay()),
					e.updateDisplay(),
					t.collapse()
				}, function (e, a, i) {
					return e == t && n == a
				}),
				!1
			}),
			k.set("Nether Blast", "click"),
			y.set("Nether Blast", function (e, a) {
				let t = u.lanes[J.getCurrentLane()],
				n = J.getTurn();
				t.cards.findIndex(function (a) {
					return a[n] == e
				});
				if (t.improvements[1 - n].length) {
					let e = Math.floor(Math.random() * t.improvements[1 - n].length);
					return (e = t.improvements[1 - n].splice(e)[0]).div.parentNode.removeChild(e.div),
					!0
				}
				return !1
			}),
			k.set("Great Cleave", "continuousEffect"),
			y.set("Great Cleave", function (e, a) {
				e.cleave[4] += Math.floor(i(e.currentAttack) / 2)
			}),
			k.set("Base Cleave", "continuousEffect"),
			y.set("Base Cleave", function (e, a) {
				e.cleave[4] += 3
			}),
			k.set("Glaves of Wisdom", "continuousEffect"),
			y.set("Glaves of Wisdom", function (e, a) {
				e.cleave[4] += 3
			}),
			k.set("Bringer of the Faithful", "endOfRound"),
			y.set("Bringer of the Faithful", function (e, a) {
				null != a.detail.lane && J.extraDeploy[a.detail.player][a.detail.lane].push(E(V.Cards.find(function (e) {
							return "Melee Creep" == e.Name
						}), J.players[a.detail.player]))
			}),
			k.set("Venomous Nature", "endOfRound"),
			y.set("Venomous Nature", function (e, a) {
				null != a.detail.lane && J.extraDeploy[a.detail.player][a.detail.lane].push(E(V.Cards.find(function (e) {
							return "Plague Ward" == e.Name
						}), J.players[a.detail.player]))
			}),
			k.set("Jinada", "beforeTheActionPhase"),
			y.set("Jinada", function (e, a) {
				Math.random() < .5 && (e.currentAttack[3] += 4, e.updateDisplay())
			}),
			k.set("Sacrifice", "click"),
			y.set("Sacrifice", function (e, a) {
				return v(e, a.currentTarget, "card", function (a, t, n) {
					e.player.draw(),
					i(a.cards[n][t].currentAttack) >= 6 && e.player.draw(),
					J.condemn(a.cards[n][t], a),
					J.infoDisplayUpdate(),
					a.collapse()
				}, function (a, t, n) {
					return a == u.lanes[J.getCurrentLane()] && J.getTurn() == t && a.cards[n][t] != e
				}),
				!1
			}),
			k.set("Finger of Death", "click"),
			y.set("Finger of Death", function (e, a) {
				return v(e, a.currentTarget, "card", function (e, a, t) {
					e.cards[t][a].currentHealth[0] -= 8 - i(e.cards[t][a].currentArmor),
					e.cards[t][a].updateDisplay(),
					e.collapse()
				}, function (e, a, t) {
					return e == u.lanes[J.getCurrentLane()]
				}),
				!1
			}),
			k.set("Efficient Killer", "whenAttacking"),
			y.set("Efficient Killer", function (e, a) {
				let t = u.lanes[a.detail.lane],
				n = a.detail.card + e.arrow;
				null != t.cards[n] && null != t.cards[n][1 - a.detail.player].Name && "Hero" == t.cards[n][1 - a.detail.player].CardType && (e.currentAttack[4] += 4)
			}),
			k.set("Warmonger", "whenAttacking"),
			y.set("Warmonger", function (e, a) {
				let t = u.lanes[a.detail.lane],
				n = a.detail.card + e.arrow;
				null != t.cards[n] && null != t.cards[n][1 - a.detail.player].Name || (e.currentAttack[4] += 4)
			}),
			k.set("Precision Aura", "continuousEffect"),
			y.set("Precision Aura", function (e, a) {
				u.lanes.forEach(function (t) {
					t.cards.forEach(function (t) {
						null != t[a.detail.player].Name && t[a.detail.player] != e && (t[a.detail.player].currentAttack[4] += 1, t[a.detail.player].updateDisplay())
					})
				})
			}),
			k.set("Purification", "click"),
			y.set("Purification", function (e, a) {
				return v(e, a.currentTarget, "card", function (e, a, t) {
					e.cards[t][a].currentHealth[0] += 3,
					e.cards[t][a].currentHealth[0] > e.cards[t][a].Health && (e.cards[t][a].currentHealth[0] = e.cards[t][a].Health),
					e.cards[t][a].updateDisplay()
				}, function (e, a, t) {
					return e == u.lanes[J.getCurrentLane()]
				}),
				!1
			}),
			k.set("Fissure", "click"),
			y.set("Fissure", function (e, a) {
				let t = u.lanes[J.getCurrentLane()],
				n = J.getTurn(),
				i = t.cards.findIndex(function (a) {
						return a[n] == e
					});
				for (var r = -1; r < 2; r += 1)
					null != t.cards[i + r] && null != t.cards[i + r][1 - n].Name && (t.cards[i + r][1 - n].disarmed = !0, t.cards[i + r][1 - n].silenced = !0, t.cards[i + r][1 - n].updateDisplay());
				return !0
			}),
			k.set("Ravage", "click"),
			y.set("Ravage", function (e, a) {
				let t = u.lanes[J.getCurrentLane()],
				n = J.getTurn(),
				i = t.cards.findIndex(function (a) {
						return a[n] == e
					});
				for (var r = -1; r < 2; r += 1)
					null != t.cards[i + r] && null != t.cards[i + r][1 - n].Name && (t.cards[i + r][1 - n].disarmed = !0, t.cards[i + r][1 - n].silenced = !0, t.cards[i + r][1 - n].updateDisplay());
				return t.cards.forEach(function (e) {
					null != e[1 - n].Name && Math.random() < .5 && (e[1 - n].disarmed = !0, e[1 - n].silenced = !0, e[1 - n].updateDisplay())
				}),
				!0
			}),
			k.set("Headshot", "click"),
			y.set("Headshot", function (e, a) {
				return v(e, a.currentTarget, "card", function (e, a, t) {
					e.cards[t][a].currentHealth[0] -= 5 - i(e.cards[t][a].currentArmor),
					e.cards[t][a].updateDisplay(),
					e.collapse()
				}, function (e, a, t) {
					return e == u.lanes[J.getCurrentLane()]
				}),
				!1
			}),
			k.set("Barroom Brawler", "afterUnitDies"),
			y.set("Barroom Brawler", function (e, a) {
				let t = u.lanes[J.getCurrentLane()];
				a.detail.player,
				a.detail.card;
				return !(a.detail.player == a.detail.triggerPlayer || "Hero" != t.cards[a.detail.triggerCard][a.detail.triggerPlayer].CardType || i(e.currentHealth) < 0 || a.detail.card + e.arrow != a.detail.triggerCard) && (e.currentArmor[1] += 2, e.updateDisplay(), !0)
			}),
			k.set("Sadist", "afterUnitDies"),
			y.set("Sadist", function (e, a) {
				u.lanes[J.getCurrentLane()],
				a.detail.player,
				a.detail.card;
				return !(a.detail.player == a.detail.triggerPlayer || i(e.currentHealth) < 0 || a.detail.card - 1 != a.detail.triggerCard && a.detail.card != a.detail.triggerCard && a.detail.card + 1 != a.detail.triggerCard) && (e.currentHealth[1] += 1, e.updateDisplay(), !0)
			}),
			k.set("Blood Bath", "afterUnitDies"),
			y.set("Blood Bath", function (e, a) {
				u.lanes[J.getCurrentLane()],
				a.detail.player,
				a.detail.card;
				return !(a.detail.player == a.detail.triggerPlayer || i(e.currentHealth) < 0 || a.detail.card + e.arrow != a.detail.triggerCard) && (e.currentHealth[0] = e.Health, e.updateDisplay(), !0)
			}),
			k.set("Barracks : Effect", "endOfRound"),
			y.set("Barracks : Effect", function (e, a) {
				null != a.detail.lane && J.extraDeploy[a.detail.player][a.detail.lane].push(E(V.Cards.find(function (e) {
							return "Melee Creep" == e.Name
						}), J.players[a.detail.player]))
			}),
			k.set("Grand Melee : Effect", "continuousEffect"),
			y.set("Grand Melee : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane];
				t.cards.some(function (e) {
					return "Hero" == e[a.detail.player].CardType && "Agility" == e[a.detail.player].Color
				}) && t.cards.forEach(function (e) {
					null != e[a.detail.player].Name && "Hero" == e[a.detail.player].CardType && (e[a.detail.player].cleave[4] += 2, e[a.detail.player].updateDisplay()),
					null != e[1 - a.detail.player].Name && "Hero" == e[1 - a.detail.player].CardType && (e[1 - a.detail.player].cleave[4] += 2, e[1 - a.detail.player].updateDisplay())
				})
			}),
			k.set("Assured Destruction : Effect", "continuousEffect"),
			y.set("Assured Destruction : Effect", function (e, a) {
				u.lanes[a.detail.lane].cards.forEach(function (e) {
					null != e[a.detail.player].Name && "Hero" == e[a.detail.player].CardType && (e[a.detail.player].siege[4] += 4, e[a.detail.player].updateDisplay()),
					null != e[1 - a.detail.player].Name && "Hero" == e[1 - a.detail.player].CardType && (e[1 - a.detail.player].siege[4] += 4, e[1 - a.detail.player].updateDisplay())
				})
			}),
			k.set("Howling Mind : Effect", "endOfRound"),
			y.set("Howling Mind : Effect", function (e, a) {
				J.players[0].draw(),
				J.players[1].draw()
			}),
			k.set("Ignite : Effect", "beforeTheActionPhase"),
			y.set("Ignite : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane];
				t.cards.forEach(function (e) {
					null != e[1 - a.detail.player].Name && (e[1 - a.detail.player].currentHealth[0] -= 1 - i(e[1 - a.detail.player].currentArmor))
				}),
				t.collapse()
			}),
			k.set("Conflagration : Effect", "beforeTheActionPhase"),
			y.set("Conflagration : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane];
				t.cards.forEach(function (e) {
					null != e[1 - a.detail.player].Name && (e[1 - a.detail.player].currentHealth[0] -= 2 - i(e[1 - a.detail.player].currentArmor))
				}),
				t.collapse()
			}),
			k.set("Burning Oil : Effect", "continuousEffect"),
			y.set("Burning Oil : Effect", function (e, a) {}),
			k.set("Assault Ladders : Effect", "whenAttacking"),
			y.set("Assault Ladders : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane];
				t.cards.forEach(function (e, n) {
					null != e[a.detail.player].Name && (null != t.cards[n + e[a.detail.player].arrow] && null != t.cards[n + e[a.detail.player].arrow][1 - a.detail.player].Name || (t.cards[n][a.detail.player].currentAttack[4] += 2))
				})
			}),
			k.set("Mist of Avernus : Effect", "beforeTheActionPhase"),
			y.set("Mist of Avernus : Effect", function (e, a) {
				u.lanes[a.detail.lane].cards.forEach(function (e) {
					null != e[a.detail.player].Name && (e[a.detail.player].currentAttack[1] += 1, e[a.detail.player].updateDisplay())
				})
			}),
			k.set("Altar of the Mad Moon : Effect", "continuousEffect"),
			y.set("Altar of the Mad Moon : Effect", function (e, a) {
				u.lanes[a.detail.lane].cards.forEach(function (e) {
					null != e[a.detail.player].Name && "Creep" == e[a.detail.player].CardType && (e[a.detail.player].regen[4] += 2, e[a.detail.player].updateDisplay())
				})
			}),
			k.set("Verdant Refuge : Effect", "continuousEffect"),
			y.set("Verdant Refuge : Effect", function (e, a) {
				u.lanes[a.detail.lane].cards.forEach(function (e) {
					null != e[a.detail.player].Name && (e[a.detail.player].currentArmor[4] += 1, e[a.detail.player].updateDisplay())
				})
			}),
			k.set("Escape Route : Effect", "click"),
			y.set("Escape Route : Effect", function (e, a) {
				return v(e, a.currentTarget, "card", function (e, a, t) {
					let n = e.cards[t][a],
					i = w(e);
					n.div.parentNode.replaceChild(i.div, n.div),
					e.cards[t][a] = i,
					n.respawn = 0,
					n.currentHealth[0] = n.Health,
					n.updateDisplay()
				}, function (e, a, t) {
					return u.lanes[J.getCurrentLane()] == e && J.getTurn() == a && "Hero" == e.cards[t][a].CardType
				}),
				!1
			}),
			k.set("Trebuchets : Effect", "beforeTheActionPhase"),
			y.set("Trebuchets : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane];
				t.towers[1 - a.detail.player].currentHealth[0] -= 2,
				t.towers[1 - a.detail.player].updateDisplay()
			}),
			k.set("Unsupervised Artillery : Effect", "click"),
			y.set("Unsupervised Artillery : Effect", function (e, a) {
				let t = u.lanes[J.getCurrentLane()],
				n = t.cards.reduce(d, [[], []])[1 - J.getTurn()];
				for (var i = 0; i < n.length; i++)
					if (null == t.cards[n[i]][J.getTurn()].Name)
						return !1;
				return t.towers[1 - J.getTurn()].currentHealth[0] -= 4,
				t.towers[1 - J.getTurn()].updateDisplay(),
				!0
			}),
			k.set("Steam Cannon : Effect", "click"),
			y.set("Steam Cannon : Effect", function (e, a) {
				return v(e, a.currentTarget, "card", function (e, a, t) {
					e.cards[t][a].currentHealth[0] -= 4 - (i(e.cards[t][a].currentArmor) < 0 ? i(e.cards[t][a].currentArmor) : 0),
					e.collapse()
				}, function () {
					return !0
				}),
				!1
			}),
			k.set("Keenfolk Turret : Effect", "click"),
			y.set("Keenfolk Turret : Effect", function (e, a) {
				return v(e, a.currentTarget, "card", function (e, a, t) {
					e.cards[t][a].currentHealth[0] -= 2 - (i(e.cards[t][a].currentArmor) < 0 ? i(e.cards[t][a].currentArmor) : 0),
					e.collapse()
				}, function (e, a, t) {
					return e == u.lanes[J.getCurrentLane()]
				}),
				!1
			}),
			k.set("Iron Fog Goldmine : Effect", "afterCombat"),
			y.set("Iron Fog Goldmine : Effect", function (e, a) {
				e.player.gold += 3,
				J.infoDisplayUpdate()
			}),
			k.set("Homefield Advantage : Effect", "beforeTheActionPhase"),
			y.set("Homefield Advantage : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane],
				n = t.cards.reduce(d, [[], []])[1 - a.detail.player];
				0 != n.length && (n = n[Math.floor(Math.random() * n.length)], null != (n = t.cards[n])[1 - a.detail.player].Name && (n[1 - a.detail.player].disarmed = !0, n[1 - a.detail.player].updateDisplay()))
			}),
			k.set("The Omexe Arena : Effect", "afterUnitDies"),
			y.set("The Omexe Arena : Effect", function (e, a) {
				let t = u.lanes[J.getCurrentLane()];
				a.detail.player;
				return "Hero" == t.cards[a.detail.triggerCard][a.detail.triggerPlayer].CardType && (e.player.draw(), !0)
			}),
			k.set("Assassin's Apprentice : Effect", "click"),
			y.set("Assassin's Apprentice : Effect", function (e, a) {
				let t = u.lanes[J.getCurrentLane()],
				n = J.getTurn(),
				i = t.cards.findIndex(function (a) {
						return a[n] == e
					});
				return v(e, a.currentTarget, "card", function (a, t, n) {
					e.arrow = n - i
				}, function (e, a, r) {
					return e == t && n != a && Math.abs(r - i) <= 1
				}),
				!1
			}),
			k.set("Sister of the Veil : Effect", "click"),
			y.set("Sister of the Veil : Effect", function (e, a) {
				let t = u.lanes[J.getCurrentLane()],
				n = J.getTurn(),
				i = t.cards.findIndex(function (a) {
						return a[n] == e
					});
				return v(e, a.currentTarget, "card", function (a, t, n) {
					e.arrow = n - i
				}, function (e, a, r) {
					return e == t && n != a && Math.abs(r - i) <= 1
				}),
				!1
			}),
			k.set("Rebel Decoy : Effect", "click"),
			y.set("Rebel Decoy : Effect", function (e, a) {
				let t = u.lanes[J.getCurrentLane()],
				n = J.getTurn(),
				i = t.cards.findIndex(function (a) {
						return a[n] == e
					});
				return v(e, a.currentTarget, "card", function (a, r, s) {
					let d = i > s ? e.div.nextSibling : a.cards[s][r].div.nextSibling;
					i > s ? a.cards[s][r].div.parentNode.insertBefore(e.div, a.cards[s][r].div) : e.div.parentNode.insertBefore(a.cards[s][r].div, e.div),
					i > s ? e.div.parentNode.insertBefore(a.cards[s][r].div, d) : a.cards[s][r].div.parentNode.insertBefore(e.div, d);
					let c = a.cards[s][r];
					a.cards[s][r] = t.cards[i][n],
					t.cards[i][n] = c,
					null != t.cards[i][1 - n].Name && (t.cards[i][n].arrow = 0, t.cards[i][n].updateDisplay()),
					null != a.cards[s][1 - r].Name && (a.cards[s][r].arrow = 0, a.cards[s][r].updateDisplay())
				}, function (e, a, i) {
					return e == t && n == a
				}),
				!1
			}),
			k.set("Troll Soothsayer : Effect", "endOfRound"),
			y.set("Troll Soothsayer : Effect", function (e, a) {
				e.player.draw()
			}),
			k.set("Legion Standard Bearer : Effect", "continuousEffect"),
			y.set("Legion Standard Bearer : Effect", function (e, a) {
				for (var t = -1; t < 2; t += 2) {
					let e = u.lanes[a.detail.lane],
					n = a.detail.card;
					null != e.cards[n + t] && null != e.cards[n + t][a.detail.player].Name && (e.cards[n + t][a.detail.player].currentAttack[4] += 4, e.cards[n + t][a.detail.player].updateDisplay())
				}
			}),
			k.set("Mercenary Exiles : Effect", "click"),
			y.set("Mercenary Exiles : Effect", function (e, a) {
				let t = Math.floor(e.player.gold / 2);
				return e.player.gold = 0,
				e.currentAttack[1] += t,
				e.currentHealth[1] += t,
				e.updateDisplay(),
				J.infoDisplayUpdate(),
				!0
			}),
			k.set("Satyr Magician : Effect", "click"),
			y.set("Satyr Magician : Effect", function (e, a) {
				let t = u.lanes[J.getCurrentLane()].towers[J.getTurn()];
				return t.mana[0] = t.mana[1],
				t.updateDisplay(),
				!0
			}),
			k.set("Disciple of Nevermore : Effect", "continuousEffect"),
			y.set("Disciple of Nevermore : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane];
				t.cards.forEach(function (e) {
					null != e[a.detail.player].Name && t.cards[a.detail.card] != e && (e[a.detail.player].currentArmor[4] -= 2, e[a.detail.player].currentAttack[4] += 2, e[a.detail.player].updateDisplay())
				})
			}),
			k.set("Ravenous Mass : Effect", "click"),
			y.set("Ravenous Mass : Effect", function (e, a) {
				let t = u.lanes[J.getCurrentLane()],
				n = J.getTurn(),
				r = t.cards.findIndex(function (a) {
						return a[n] == e
					});
				for (var s = -1; s < 2; s += 2)
					null != t.cards[r + s] && null != t.cards[r + s][n].Name && (e.currentAttack[1] += i(t.cards[r + s][n].currentAttack), e.currentHealth[1] += i(t.cards[r + s][n].currentHealth), J.condemn(t.cards[r + s][n], t));
				return t.collapse(),
				!0
			}),
			k.set("Rampaging Hellbear : Effect", "afterCombat"),
			y.set("Rampaging Hellbear : Effect", function (e, a) {
				e.currentAttack[1] += 4,
				e.updateDisplay()
			}),
			k.set("Savage Wolf : Effect", "afterCombat"),
			y.set("Savage Wolf : Effect", function (e, a) {
				e.currentAttack[1] += 1,
				e.currentHealth[1] += 2,
				e.updateDisplay()
			}),
			k.set("Satyr Duelist : Effect", "afterCombat"),
			y.set("Satyr Duelist : Effect", function (e, a) {
				e.currentAttack[1] += 2,
				e.updateDisplay()
			}),
			k.set("Savage Wolf : Effect", "afterCombat"),
			y.set("Savage Wolf : Effect", function (e, a) {
				e.currentAttack[1] += 1,
				e.currentHealth[1] += 2,
				e.updateDisplay()
			}),
			k.set("Selfish Cleric : Effect", "afterCombat"),
			y.set("Selfish Cleric : Effect", function (e, a) {
				e.currentHealth[0] = e.Health,
				e.updateDisplay()
			}),
			k.set("Revtel Convoy : Effect", "continuousEffect"),
			y.set("Revtel Convoy : Effect", function (e, a) {
				let t = Math.floor(e.player.gold / 2);
				e.currentAttack[4] += t,
				e.updateDisplay()
			}),
			k.set("Thunderhide Pack : Effect", "continuousEffect"),
			y.set("Thunderhide Pack : Effect", function (e, a) {
				e.siege[4] += 6,
				e.updateDisplay()
			}),
			k.set("Ogre Corpse Tosser : Effect", "afterUnitDies"),
			y.set("Ogre Corpse Tosser : Effect", function (e, a) {
				let t = u.lanes[J.getCurrentLane()],
				n = a.detail.player;
				return console.log(t.cards[a.detail.triggerCard][a.detail.triggerPlayer].Name),
				!(a.detail.player != a.detail.triggerPlayer || "Melee Creep" != t.cards[a.detail.triggerCard][a.detail.triggerPlayer].Name || i(e.currentHealth) < 0) && (console.log("Tossed"), t.towers[1 - n].currentHealth[0] -= 2 - (i(t.towers[1 - n].currentArmor) < 0 ? i(t.towers[1 - n].currentArmor) : 0), t.towers[1 - n].updateDisplay(), !0)
			}),
			k.set("Emissary of the Quorum : Effect", "click"),
			y.set("Emissary of the Quorum : Effect", function (e, a) {
				let t = u.lanes[J.getCurrentLane()],
				n = J.getTurn();
				return t.cards.forEach(function (e) {
					null != e[n].Name && (e[n].currentAttack[1] += 2, e[n].currentHealth[1] += 2, e[n].updateDisplay())
				}),
				!0
			}),
			k.set("Plague Ward : Effect", "beforeTheActionPhase"),
			y.set("Plague Ward : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane],
				n = a.detail.card - 1 < 0 ? 0 : a.detail.card - 1,
				r = t.cards.slice(n, a.detail.card + 2).reduce(d, [[], []])[1 - a.detail.player];
				0 != r.length && (r = r[Math.floor(Math.random() * r.length)] + n, null != (r = t.cards[r])[1 - a.detail.player].Name && (r[1 - a.detail.player].currentHealth[0] -= 2 - (i(r[1 - a.detail.player].currentArmor) < 0 ? i(r[1 - a.detail.player].currentArmor) : 0), r[1 - a.detail.player].updateDisplay()))
			}),
			k.set("Oglodi Catapult : Effect", "beforeTheActionPhase"),
			y.set("Oglodi Catapult : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane];
				t.towers[1 - a.detail.player].currentHealth[0] -= 2,
				t.towers[1 - a.detail.player].updateDisplay()
			}),
			k.set("Prowler Vanguard : Effect", "continuousEffect"),
			y.set("Prowler Vanguard : Effect", function (e, a) {
				for (var t = -1; t < 2; t += 2) {
					let e = u.lanes[a.detail.lane],
					n = a.detail.card;
					null != e.cards[n + t] && null != e.cards[n + t][a.detail.player].Name && (e.cards[n + t][a.detail.player].currentArmor[4] += 1, e.cards[n + t][a.detail.player].updateDisplay())
				}
			}),
			k.set("Pit Fighter of Quoidge : Effect", "afterUnitDies"),
			y.set("Pit Fighter of Quoidge : Effect", function (e, a) {
				u.lanes[J.getCurrentLane()],
				a.detail.player,
				a.detail.card;
				return !(a.detail.player != a.detail.triggerPlayer || i(e.currentHealth) < 0 || a.detail.card + 1 != a.detail.triggerCard && a.detail.card - 1 != a.detail.triggerCard) && (e.currentAttack[1] += 2, e.updateDisplay(), !0)
			}),
			k.set("Assassin's Shadow : Effect", "continuousEffect"),
			y.set("Assassin's Shadow : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane];
				return e.siege[4] += 5,
				e.currentAttack[4] -= 2 * (t.cards.reduce(d, [[], []])[a.detail.player].length - 1),
				e.updateDisplay(),
				!0
			}),
			k.set("Smeevil Armsmaster : Effect", "continuousEffect"),
			y.set("Smeevil Armsmaster : Effect", function (e, a, t) {
				let n = u.lanes[a.detail.lane],
				i = n.cards.reduce(c, [[], []])[a.detail.player];
				0 != i.length && (i = i[Math.floor(Math.random() * i.length)], null != (i = n.cards[i])[a.detail.player].Name && (i[a.detail.player].currentAttack[1] += 2, i[a.detail.player].updateDisplay())),
				e.div.removeEventListener("continuousEffect", t)
			}),
			k.set("Smeevil Blacksmith : Effect", "continuousEffect"),
			y.set("Smeevil Blacksmith : Effect", function (e, a, t) {
				let n = u.lanes[a.detail.lane],
				i = n.cards.reduce(c, [[], []])[a.detail.player];
				0 != i.length && (i = i[Math.floor(Math.random() * i.length)], null != (i = n.cards[i])[a.detail.player].Name && (i[a.detail.player].currentArmor[1] += 2, i[a.detail.player].updateDisplay())),
				e.div.removeEventListener("continuousEffect", t)
			}),
			k.set("Roseleaf Rejuvenator : Effect", "continuousEffect"),
			y.set("Roseleaf Rejuvenator : Effect", function (e, a, t) {
				let n = a.detail.player,
				i = u.lanes[a.detail.lane];
				i.towers[a.detail.player].currentHealth[0] += 7,
				i.towers[n].currentHealth[0] > 40 && (i.towers[n].currentHealth[0] = 40),
				i.towers[n].updateDisplay(),
				e.div.removeEventListener("continuousEffect", t)
			}),
			k.set("Champion of the Ancient : Effect", "continuousEffect"),
			y.set("Champion of the Ancient : Effect", function (e, a, t) {
				let n = u.lanes[a.detail.lane].cards.reduce(d, [[], []])[a.detail.player].length;
				0 != n && (e.currentAttack[1] += n, e.currentHealth[1] += n, e.cleave[1] += n),
				e.div.removeEventListener("continuousEffect", t)
			}),
			k.set("Oglodi Vandal : Effect", "continuousEffect"),
			y.set("Oglodi Vandal : Effect", function (e, a, t) {
				let n = u.lanes[a.detail.lane];
				n.towers[1 - a.detail.player].currentHealth[0] -= 4,
				n.towers[1 - a.detail.player].updateDisplay(),
				e.div.removeEventListener("continuousEffect", t)
			}),
			k.set("Stonehall Elite : Effect", "afterUnitDies"),
			y.set("Stonehall Elite : Effect", function (e, a) {
				u.lanes[J.getCurrentLane()],
				a.detail.player,
				a.detail.card;
				return !(a.detail.player == a.detail.triggerPlayer || i(e.currentHealth) < 0 || a.detail.card + e.arrow != a.detail.triggerCard) && (e.currentAttack[1] += 2, e.currentHealth[1] += 2, e.updateDisplay(), !0)
			}),
			k.set("Cursed Satyr : Effect", "afterCombat"),
			y.set("Cursed Satyr : Effect", function (e, a) {
				let t = [[], []],
				n = u.lanes[J.getCurrentLane()],
				i = E(V.Cards.find(function (e) {
							return "Zombie" == e.Name
						}), J.players[1 - a.detail.player]);
				return t[1 - a.detail.player].push(i),
				n.summon(t),
				!0
			}),
			k.set("Leather Armor : Effect", "continuousEffect"),
			y.set("Leather Armor : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				t.currentArmor[4] += 1,
				t.updateDisplay()
			}),
			k.set("Traveler's Cloak : Effect", "continuousEffect"),
			y.set("Traveler's Cloak : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				t.currentHealth[4] += 4,
				t.updateDisplay()
			}),
			k.set("Short Sword : Effect", "continuousEffect"),
			y.set("Short Sword : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				t.currentAttack[4] += 2,
				t.updateDisplay()
			}),
			k.set("Demagicking Maul : Effect", "continuousEffect"),
			y.set("Demagicking Maul : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				t.currentAttack[4] += 2,
				t.updateDisplay()
			}),
			k.set("Demagicking Maul : EffectActive", "click"),
			y.set("Demagicking Maul : EffectActive", function (e, a) {
				let t = u.lanes[J.getCurrentLane()],
				n = J.getTurn(),
				i = t.cards.findIndex(function (a) {
						return a[n].Weapon == e
					});
				if (null == t.cards[i + t.cards[i][n].arrow][1 - n].Name && t.improvements[1 - n].length) {
					let e = Math.floor(Math.random() * t.improvements[1 - n].length);
					return (e = t.improvements[1 - n].splice(e)[0]).div.parentNode.removeChild(e.div),
					!0
				}
				return !1
			}),
			k.set("Stonehall Plate : Effect", "continuousEffect"),
			y.set("Stonehall Plate : Effect", function (e, a) {
				e.stonehall || (e.div.addEventListener("afterCombat", function () {
						e.Armor = e.Armor || 1,
						e.Armor += 1
					}), e.stonehall = !0);
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				e.Armor = e.Armor || 1,
				t.currentArmor[4] += e.Armor,
				t.updateDisplay()
			}),
			k.set("Stonehall Cloak : Effect", "continuousEffect"),
			y.set("Stonehall Cloak : Effect", function (e, a) {
				e.stonehall || (e.div.addEventListener("afterCombat", function () {
						e.Health = e.Health || 4,
						e.Health += 2
					}), e.stonehall = !0);
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				e.Health = e.Health || 4,
				t.currentHealth[4] += e.Health,
				t.updateDisplay()
			}),
			k.set("Blade of the Vigil : Effect", "continuousEffect"),
			y.set("Blade of the Vigil : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				t.currentAttack[4] += 2,
				t.cleave[4] += 2,
				t.updateDisplay()
			}),
			k.set("Keenfolk Musket : Effect", "continuousEffect"),
			y.set("Keenfolk Musket : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				t.currentAttack[4] += 2,
				t.updateDisplay()
			}),
			k.set("Keenfolk Musket : EffectActive", "click"),
			y.set("Keenfolk Musket : EffectActive", function (e, a) {
				return v(e, a.currentTarget, "card", function (e, a, t) {
					e.cards[t][a].currentHealth[0] -= 2 - i(e.cards[t][a].currentArmor),
					e.collapse()
				}, function (e, a, t) {
					return e == u.lanes[J.getCurrentLane()]
				}),
				!1
			}),
			k.set("Red Mist Maul : Effect", "continuousEffect"),
			y.set("Red Mist Maul : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				t.currentAttack[4] += 2,
				t.siege[4] += 5,
				t.updateDisplay()
			}),
			k.set("Shield of Basilius : Effect", "continuousEffect"),
			y.set("Shield of Basilius : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				t.currentArmor[4] += 2,
				t.updateDisplay();
				for (var n = -1; n < 2; n += 2) {
					let e = u.lanes[a.detail.lane],
					t = a.detail.card;
					null != e.cards[t + n] && null != e.cards[t + n][a.detail.player].Name && (e.cards[t + n][a.detail.player].currentArmor[4] += 1, e.cards[t + n][a.detail.player].updateDisplay())
				}
			}),
			k.set("Horn of the Alpha : Effect", "continuousEffect"),
			y.set("Horn of the Alpha : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				t.currentHealth[4] += 4,
				t.updateDisplay()
			}),
			k.set("Horn of the Alpha : EffectActive", "click"),
			y.set("Horn of the Alpha : EffectActive", function (e, a) {
				let t = [[], []],
				n = u.lanes[J.getCurrentLane()],
				i = E(V.Cards.find(function (e) {
							return "Thunderhide Pack" == e.Name
						}), J.players[J.getTurn()]);
				return t[J.getTurn()].push(i),
				n.summon(t),
				!0
			}),
			k.set("Ring of Tarrasque : Effect", "continuousEffect"),
			y.set("Ring of Tarrasque : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				t.currentHealth[4] += 4,
				t.regen[4] += 6,
				t.updateDisplay()
			}),
			k.set("Phase Boots : Effect", "continuousEffect"),
			y.set("Phase Boots : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				t.currentHealth[4] += 4,
				t.updateDisplay()
			}),
			k.set("Phase Boots : EffectActive", "click"),
			y.set("Phase Boots : EffectActive", function (e, a) {
				let t = u.lanes[J.getCurrentLane()],
				n = J.getTurn(),
				i = t.cards.findIndex(function (a) {
						return a[n].Accessory == e
					}),
				r = t.cards[i][n];
				return v(e, a.currentTarget, "card", function (e, a, s) {
					let d = i > s ? r.div.nextSibling : e.cards[s][a].div.nextSibling;
					i > s ? e.cards[s][a].div.parentNode.insertBefore(r.div, e.cards[s][a].div) : r.div.parentNode.insertBefore(e.cards[s][a].div, r.div),
					i > s ? r.div.parentNode.insertBefore(e.cards[s][a].div, d) : e.cards[s][a].div.parentNode.insertBefore(r.div, d);
					let c = e.cards[s][a];
					e.cards[s][a] = t.cards[i][n],
					t.cards[i][n] = c,
					null != t.cards[i][1 - n].Name && (t.cards[i][n].arrow = 0, t.cards[i][n].updateDisplay()),
					null != e.cards[s][1 - a].Name && (e.cards[s][a].arrow = 0, e.cards[s][a].updateDisplay())
				}, function (e, a, i) {
					return e == t && n == a
				}),
				!1
			}),
			k.set("Broadsword : Effect", "continuousEffect"),
			y.set("Broadsword : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				t.currentAttack[4] += 4,
				t.updateDisplay()
			}),
			k.set("Claymore : Effect", "continuousEffect"),
			y.set("Claymore : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				t.currentAttack[4] += 8,
				t.updateDisplay()
			}),
			k.set("Chainmail : Effect", "continuousEffect"),
			y.set("Chainmail : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				t.currentArmor[4] += 2,
				t.updateDisplay()
			}),
			k.set("Platemail : Effect", "continuousEffect"),
			y.set("Platemail : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				t.currentArmor[4] += 4,
				t.updateDisplay()
			}),
			k.set("Barbed Mail : Effect", "continuousEffect"),
			y.set("Barbed Mail : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				t.currentArmor[4] += 2,
				t.retaliate[4] += 2,
				t.updateDisplay()
			}),
			k.set("Hero's Cape : Effect", "continuousEffect"),
			y.set("Hero's Cape : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				t.currentHealth[4] += 16,
				t.updateDisplay()
			}),
			k.set("Fur-lined Mantle : Effect", "continuousEffect"),
			y.set("Fur-lined Mantle : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				t.currentHealth[4] += 8,
				t.updateDisplay()
			}),
			k.set("Stonehall Pike : Effect", "continuousEffect"),
			y.set("Stonehall Pike : Effect", function (e, a) {
				e.stonehall || (e.div.addEventListener("afterCombat", function () {
						e.Attack = e.Attack || 2,
						e.Attack += 1
					}), e.stonehall = !0);
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				e.Attack = e.Attack || 2,
				t.currentAttack[4] += e.Attack,
				t.updateDisplay()
			}),
			k.set("Blink Dagger : Effect", "continuousEffect"),
			y.set("Blink Dagger : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				t.currentAttack[4] += 2,
				t.updateDisplay()
			}),
			k.set("Blink Dagger : EffectActive", "click"),
			y.set("Blink Dagger : EffectActive", function (e, a) {
				let t = u.lanes[J.getCurrentLane()],
				n = J.getTurn(),
				i = t.cards.findIndex(function (a) {
						return a[n].Weapon == e
					}),
				r = t.cards[i][n],
				s = [[], []],
				d = w(t);
				return v(e, a.currentTarget, "lane", function (e) {
					t.cards[i][n] = d,
					r.div.parentNode.replaceChild(d.div, r.div),
					s[n].push(r),
					e.summon(s)
				}, function (e) {
					return e != t
				}),
				!1
			}),
			k.set("Wingfall Hammer : Effect", "continuousEffect"),
			y.set("Wingfall Hammer : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				t.currentAttack[4] += 4,
				t.updateDisplay()
			}),
			k.set("Wingfall Hammer : EffectActive", "click"),
			y.set("Wingfall Hammer : EffectActive", function (e, a) {
				let t = u.lanes[J.getCurrentLane()],
				n = J.getTurn(),
				r = t.cards.findIndex(function (a) {
						return a[n].Weapon == e
					});
				for (var s = -1; s <= 1; s++)
					console.log(r), null != t.cards[r + s] && null != t.cards[r + s][n].Name && (t.cards[r + s][n].regen[3] += Math.floor(i(t.cards[r][n].currentAttack) / 2), t.cards[r + s][n].updateDisplay());
				return !0
			}),
			k.set("Rumusque Vestments : Effect", "continuousEffect"),
			y.set("Rumusque Vestments : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				t.currentArmor[4] += 1,
				t.updateDisplay()
			}),
			k.set("Rumusque Vestments : EffectActive", "click"),
			y.set("Rumusque Vestments : EffectActive", function (e, a) {
				return v(e, a.currentTarget, "card", function (e, a, t) {
					e.cards[t][a].currentHealth[0] += 4,
					e.cards[t][a].currentHealth[0] > e.cards[t][a].Health && (e.cards[t][a].currentHealth[0] = e.cards[t][a].Health),
					e.cards[t][a].updateDisplay()
				}, function (e, a, t) {
					return e == u.lanes[J.getCurrentLane()]
				}),
				!1
			}),
			k.set("Shield of Aquila : Effect", "continuousEffect"),
			y.set("Shield of Aquila : Effect", function (e, a) {
				let t = u.lanes[a.detail.lane].cards[a.detail.card][a.detail.player];
				t.currentArmor[4] += 2,
				t.updateDisplay();
				for (var n = -1; n < 2; n += 2) {
					let e = u.lanes[a.detail.lane],
					t = a.detail.card;
					null != e.cards[t + n] && null != e.cards[t + n][a.detail.player].Name && (e.cards[t + n][a.detail.player].currentArmor[4] += 3, e.cards[t + n][a.detail.player].updateDisplay())
				}
			});
			const A = e => {
				if ("Hero" == e[J.getTurn()].CardType && !e[J.getTurn()].silenced)
					return e[J.getTurn()].Color == b.Color
			},
			w = (e, a, t) => {
				let n = document.createElement("div");
				n.classList.add("blank"),
				null != a && (t ? a.insertBefore(n, a.childNodes[t - 1].nextSibling) : a.insertBefore(n, a.firstChild)),
				n.ondragover = function (e) {
					e.preventDefault()
				},
				n.ondragenter = function (e) {
					e.target.classList.add("dragover")
				},
				n.ondragleave = function (e) {
					e.target.classList.remove("dragover")
				},
				n.ondrop = (e => i(e));
				const i = a => {
					if (a.preventDefault(), null != a && a.target.classList.remove("dragover"), !(u.lanes[J.getCurrentLane()].towers[J.getTurn()].mana[0] < b.ManaCost) && e == J.getCurrentLane() && "Creep" == b.CardType && u.lanes[J.getCurrentLane()].cards.some(A)) {
						let a = u.lanes[e].cards.flat().findIndex(function (e) {
								return e.div == r.div
							}),
						t = a % 2;
						a = Math.floor(a / 2),
						t == J.getTurn() && (b.div.draggable = !1, n.parentNode.replaceChild(b.div, n), u.lanes[e].cards[a][t] = b, u.lanes[J.getCurrentLane()].towers[J.getTurn()].mana[0] -= b.ManaCost, u.lanes[J.getCurrentLane()].towers[J.getTurn()].updateDisplay(), null != u.lanes[e].cards[a][1 - t].Name && (u.lanes[e].cards[a][1 - t].arrow = 0, u.lanes[e].cards[a][1 - t].updateDisplay()), J.players[J.getTurn()].hand.splice(J.players[J.getTurn()].hand.indexOf(b), 1), u.lanes[e].collapse(), u.lanes[e].expand(), J.dispatchEvent("continuousRefresh"), J.nextTurn())
					}
				};
				let r = {
					div: n,
					drop: i
				};
				return {
					div: n,
					drop: i
				}
			},
			E = (e, a) => {
				let t = "../node_modules/artifactdb/assets",
				n = document.createElement("div"),
				r = () => {},
				s = () => {},
				d = () => {},
				c = () => {},
				l = {
					div: n,
					player: a
				};
				n.classList.add("card", e.Color, e.CardType);
				let o = document.createElement("IMG");
				if (o.draggable = !1, o.src = `${t}/artwork/large/${e.FileName}.jpg`, o.onerror = function () {
					o.src = "../src/placeholder.png"
				}, n.appendChild(o), "Hero" == e.CardType && (l.respawn = 0, l.Bounty = 5, s = C(s, function () {
								e.respawn >= 0 && (e.Bounty = 5)
							})), "Creep" == e.CardType && (l.Bounty = 1), null != e.ManaCost) {
					let a = document.createElement("div");
					a.classList.add("mana-cost"),
					a.textContent = e.ManaCost,
					n.appendChild(a)
				}
				if ("Consumable" == e.ItemType && (l.ManaCost = 0), null != e.GoldCost) {
					let a = document.createElement("div");
					a.classList.add("gold-cost"),
					a.textContent = e.GoldCost,
					n.appendChild(a)
				}
				if (null != e.Text && "" != e.Text) {
					let a = document.createElement("div");
					a.classList.add("card-text");
					let i = document.createElement("IMG");
					i.draggable = !1,
					i.src = `${t}/text_background.jpg`;
					let r = document.createElement("span");
					r.textContent = e.Text,
					n.appendChild(a),
					a.appendChild(i),
					a.appendChild(r)
				}
				let m = document.createElement("div");
				if (m.classList.add("name"), m.textContent = e.Name, n.appendChild(m), "Hero" == e.CardType) {
					var f = document.createElement("div");
					f.classList.add("items"),
					n.appendChild(f),
					l.Weapon = null;
					var _ = document.createElement("div");
					_.classList.add("Weapon"),
					f.appendChild(_),
					l.Armor = null;
					var h = document.createElement("div");
					h.classList.add("Armor"),
					f.appendChild(h),
					l.Accessory = null;
					var v = document.createElement("div");
					v.classList.add("Accessory"),
					f.appendChild(v)
				}
				if ("Creep" == e.CardType || "Hero" == e.CardType) {
					l.arrow = 0;
					let a = ["left", "middle", "right"],
					o = document.createElement("div");
					o.classList.add("arrow", a[1 + l.arrow]),
					n.appendChild(o),
					l.rndArrow = ((a, t, n) => {
						if ("number" == typeof a && (a = u.lanes[a]), null == a.cards[t][1 - n].Name) {
							let i = Math.random();
							i = i > .75 ? 1 : (i > .25) - 1,
							null != a.cards[t + i] && null != a.cards[t + i][1 - n].Name || (i = 0),
							e.arrow = i
						}
						e.updateDisplay()
					}),
					r = C(r, function () {
							o.classList.remove("left", "middle", "right"),
							o.classList.add("arrow", a[1 + e.arrow])
						}),
					l.cleave = [0, 0, 0, 0, 0, 0],
					l.retaliate = [0, 0, 0, 0, 0, 0],
					l.siege = [0, 0, 0, 0, 0, 0],
					l.regen = [0, 0, 0, 0, 0, 0],
					l.silenced = !1,
					l.disarmed = !1,
					r = C(r, function () {
							n.title = `Cleave : ${i(e.cleave)}\nRetaliate : ${i(e.retaliate)}\nSiege : ${i(e.siege)}\nRegeneration : ${i(e.regen)}`,
							i(e.cleave) > 0 ? o.classList.add("cleave") : o.classList.remove("cleave"),
							i(e.retaliate) > 0 ? n.classList.add("retaliate") : n.classList.remove("retaliate"),
							i(e.siege) > 0 ? o.classList.add("siege") : o.classList.remove("siege"),
							e.silenced ? n.classList.add("silenced") : n.classList.remove("silenced"),
							e.disarmed ? n.classList.add("disarmed") : n.classList.remove("disarmed")
						}),
					s = C(s, function () {
							e.cleave[3] = 0,
							e.retaliate[3] = 0,
							e.siege[3] = 0,
							e.regen[3] = 0,
							e.silenced = !1,
							e.disarmed = !1
						}),
					c = C(c, function () {
							e.cleave[4] = 0,
							e.retaliate[4] = 0,
							e.siege[4] = 0,
							e.regen[4] = 0
						}),
					d = C(d, function () {
							e.cleave[5] = 0,
							e.retaliate[5] = 0,
							e.siege[5] = 0,
							e.regen[5] = 0
						}),
					l.currentHealth = [e.Health, 0, 0, 0, 0, 0];
					let m = document.createElement("div");
					m.classList.add("icon-container", "health");
					let f = document.createElement("IMG");
					f.draggable = !1,
					f.src = `${t}/icon/cardstat-health.png`;
					let p = document.createElement("div");
					p.textContent = i(l.currentHealth),
					m.appendChild(f),
					m.appendChild(p),
					n.appendChild(m),
					r = C(r, function () {
							p.textContent = i(e.currentHealth),
							e.currentHealth[0] < e.Health ? p.classList.add("red-text") : p.classList.remove("red-text")
						}),
					s = C(s, function () {
							e.currentHealth[3] = 0
						}),
					c = C(c, function () {
							e.currentHealth[4] = 0
						}),
					d = C(d, function () {
							e.currentHealth[5] = 0
						}),
					l.currentAttack = [e.Attack, 0, 0, 0, 0, 0];
					let g = document.createElement("div");
					g.classList.add("icon-container", "attack");
					let _ = document.createElement("IMG");
					_.draggable = !1,
					_.src = `${t}/icon/cardstat-attack.png`;
					let h = document.createElement("div");
					h.textContent = e.Attack,
					g.appendChild(_),
					g.appendChild(h),
					n.appendChild(g),
					r = C(r, function () {
							h.textContent = i(e.currentAttack)
						}),
					s = C(s, function () {
							e.currentAttack[3] = 0
						}),
					c = C(c, function () {
							e.currentAttack[4] = 0
						}),
					d = C(d, function () {
							e.currentAttack[5] = 0
						}),
					l.currentArmor = [e.Armor, 0, 0, 0, 0, 0];
					let b = document.createElement("div");
					b.classList.add("icon-container", "armor");
					let y = document.createElement("IMG");
					y.draggable = !1,
					y.src = `${t}/icon/cardstat-armor.png`;
					let k = document.createElement("div");
					k.textContent = e.Armor,
					b.appendChild(y),
					b.appendChild(k),
					n.appendChild(b),
					r = C(r, function () {
							k.textContent = i(e.currentArmor)
						}),
					s = C(s, function () {
							e.currentArmor[3] = 0
						}),
					c = C(c, function () {
							e.currentArmor[4] = 0
						}),
					d = C(d, function () {
							e.currentArmor[5] = 0
						})
				}
				if (null != e.Abilities) {
					l.Abilities = [];
					let i = document.createElement("div");
					e.abilitiesContainer = i,
					i.classList.add("abilities-container"),
					e.Abilities.forEach(function (d, c) {
						(d = Object.assign({}, d)).div = document.createElement("div"),
						d.div.classList.add("ability-container");
						let o = document.createElement("IMG");
						if (o.draggable = !1, "Hero" == e.CardType) {
							let e = function (e) {
								return e.replace(" : Effect", "").replace(/\s/g, "_").replace("'", "-").toLowerCase()
							}
							(d.Name);
							o.src = `${t}/ability/${e}.jpg`
						} else
							c > 0 && (d.Name = d.Name + d.Type), o.src = `${t}/artwork/small/${e.FileName}.jpg`;
						o.onerror = function () {
							o.src = "../src/placeholder.png"
						},
						o.title = d.Text,
						d.div.appendChild(o),
						i.appendChild(d.div),
						"Active" == d.Type ? (d.div.classList.add("Active"), "Hero" == e.CardType ? d.currentCooldown = d.Cooldown : d.currentCooldown = 0, d.cooldownDiv = document.createElement("div"), d.cooldownDiv.classList.add("cooldown", "display-none"), d.cooldownDiv.textContent = d.currentCooldown, d.div.appendChild(d.cooldownDiv), d.div.addEventListener("click", function (t) {
								!e.silenced && J.players[J.getTurn()] == a && J.getCurrentLane() == ("Improvement" == e.CardType ? u.lanes.findIndex(function (a) {
										return a.improvements.flat().some(function (a) {
											return a.div == e.div
										})
									}) : "Item" != e.CardType ? u.lanes.findIndex(function (a) {
										return a.cards.flat().some(function (a) {
											return a.div == e.div
										})
									}) : "Weapon" == e.ItemType ? u.lanes.findIndex(function (a) {
										return a.cards.flat().some(function (a) {
											if (a.Weapon)
												return a.Weapon.div == e.div
										})
									}) : "Armor" == e.ItemType ? u.lanes.findIndex(function (a) {
										return a.cards.flat().some(function (a) {
											if (a.Armor)
												return a.Armor.div == e.div
										})
									}) : "Accessory" == e.ItemType ? u.lanes.findIndex(function (a) {
										return a.cards.flat().some(function (a) {
											if (a.Accessory)
												return a.Accessory.div == e.div
										})
									}) : void 0) && e.Abilities[c].currentCooldown <= 0 && y.get(d.Name)(e, t) && (e.Abilities[c].currentCooldown = e.Abilities[c].Cooldown, r(), J.nextTurn())
							}), s = C(s, function () {
									e.Abilities[c].currentCooldown -= 1
								}), r = C(r, function () {
									e.Abilities[c].currentCooldown <= 0 ? e.Abilities[c].cooldownDiv.classList.add("display-none") : (e.Abilities[c].cooldownDiv.classList.remove("display-none"), e.Abilities[c].cooldownDiv.textContent = e.Abilities[c].currentCooldown)
								})) : n.addEventListener(k.get(d.Name), function a(t) {
							y.get(d.Name)(e, t, a)
						}),
						l.Abilities.push(d)
					}),
					n.appendChild(i)
				}
				return n.ondragover = function (e) {
					e.preventDefault()
				},
				n.addEventListener("dragenter", function (e) {
					e.target.classList.add("dragover")
				}),
				n.addEventListener("dragleave", function (e) {
					e.target.classList.remove("dragover")
				}),
				n.ondrop = (e => l.drop(e)),
				l.drop = (a => {
					if (a.preventDefault(), null != a && a.target.classList.remove("dragover"), u.lanes[J.getCurrentLane()].towers[J.getTurn()].mana[0] >= b.ManaCost) {
						let e = u.lanes.findIndex(function (e) {
								return e.div == a.currentTarget.parentNode.parentNode
							});
						if ((e == J.getCurrentLane() || b.CrossLane) && "unit" == g.get(b.Name) && (u.lanes[J.getCurrentLane()].cards.some(A) || "Item" == b.CardType)) {
							let t = u.lanes[e].cards.flat().findIndex(function (e) {
									return e.div == a.currentTarget
								}),
							n = t % 2;
							t = Math.floor(t / 2),
							p.get(b.Name)(a, e, n, t) && (b.div.draggable = !1, u.lanes[J.getCurrentLane()].towers[b.player.turn].mana[0] -= b.ManaCost, u.lanes[J.getCurrentLane()].towers[b.player.turn].updateDisplay(), b.div.parentNode.removeChild(b.div), J.players[b.player.turn].hand.splice(J.players[b.player.turn].hand.indexOf(b), 1), J.dispatchEvent("continuousRefresh"), J.nextTurn())
						}
					} else if ("Hero" == e.CardType && "Item" == b.CardType) {
						u.lanes.findIndex(function (e) {
							return e.div == a.currentTarget.parentNode.parentNode
						}) == J.getCurrentLane() && ("Armor" == b.ItemType && (e.Armor && h.removeChild(h.firstChild), e.Armor = b, h.appendChild(b.div)), "Accessory" == b.ItemType && (e.Accessory && v.removeChild(v.firstChild), e.Accessory = b, v.appendChild(b.div)), "Weapon" == b.ItemType && (e.Weapon && _.removeChild(_.firstChild), e.Weapon = b, _.appendChild(b.div)), J.players[b.player.turn].hand.splice(J.players[b.player.turn].hand.indexOf(b), 1), J.dispatchEvent("continuousRefresh"), J.nextTurn())
					}
				}),
				n.addEventListener("click", function () {
					console.log(e)
				}),
				n.ondragstart = function (a) {
					b = e,
					null != a.dataTransfer && a.dataTransfer.setData("text/plain", " ")
				},
				n.addEventListener("endOfRound", s),
				n.addEventListener("afterCombat", d),
				n.addEventListener("continuousRefresh", c),
				l.updateDisplay = r,
				e = Object.assign({}, e, l)
			};
			var x = (() => {
				const e = document.getElementById("zoom-btn"),
				a = document.getElementById("zoom-btn-left"),
				t = document.getElementById("zoom-btn-middle"),
				n = document.getElementById("zoom-btn-right");
				e.addEventListener("click", function () {
					u.div.classList.toggle("zoom-out"),
					J.div.classList.toggle("zoom-out"),
					u.lanes[J.getCurrentLane()].div.scrollIntoView({
						inline: "center"
					})
				}),
				a.addEventListener("click", function () {
					u.div.classList.remove("zoom-out"),
					J.div.classList.remove("zoom-out"),
					u.lanes[0].div.scrollIntoView({
						inline: "center"
					})
				}),
				t.addEventListener("click", function () {
					u.div.classList.remove("zoom-out"),
					J.div.classList.remove("zoom-out"),
					u.lanes[1].div.scrollIntoView({
						inline: "center"
					})
				}),
				n.addEventListener("click", function () {
					u.div.classList.remove("zoom-out"),
					J.div.classList.remove("zoom-out"),
					u.lanes[2].div.scrollIntoView({
						inline: "center"
					})
				});
				return {
					updateActive: () => {
						switch (J.getCurrentLane()) {
						case 0:
							a.classList.add("active"),
							t.classList.remove("active"),
							n.classList.remove("active");
							break;
						case 1:
							a.classList.remove("active"),
							t.classList.add("active"),
							n.classList.remove("active");
							break;
						case 2:
							a.classList.remove("active"),
							t.classList.remove("active"),
							n.classList.add("active")
						}
					}
				}
			})();
			var D = (() => {
				const e = document.getElementById("pass-btn-bottom"),
				a = document.getElementById("pass-btn-top"),
				t = () => {
					e.classList.add("display-none"),
					a.classList.add("display-none")
				};
				return t(),
				setTimeout(function () {
					e.onclick = J.pass,
					a.onclick = J.pass
				}, 100), {
					enable: () => {
						J.getTurn() ? a.disabled = !1 : e.disabled = !1,
						J.getTurn() ? e.disabled = !0 : a.disabled = !0
					},
					disable: () => {
						e.disabled = !0,
						a.disabled = !0
					},
					hide: t,
					show: () => {
						e.classList.remove("display-none"),
						a.classList.remove("display-none")
					}
				}
			})();
			var S = (() => {
				let e = [],
				a = [];
				return {
					initialize: () => {
						e = [J.players[0].hand, J.players[1].hand],
						a = [J.players[0].handDiv, J.players[1].handDiv]
					},
					enable: () => {
						e[J.getTurn()].forEach(function (e) {
							e.div.draggable = !0
						}),
						e[1 - J.getTurn()].forEach(function (e) {
							e.div.draggable = !1
						})
					},
					disable: () => {
						for (var a = 0; a < e.length; a++)
							e[a].forEach(function (e) {
								e.div.draggable = !1
							})
					},
					hide: () => {
						for (var t = 0; t < e.length; t++)
							a[t].classList.add("hide")
					},
					show: () => {
						for (var t = 0; t < e.length; t++)
							a[t].classList.remove("hide")
					}
				}
			})();
			const T = [],
			L = document.createElement("button");
			let H = [];
			function M(e) {
				e.preventDefault()
			}
			function R(e) {
				e.target.classList.add("dragover")
			}
			function B(e) {
				e.target.classList.remove("dragover")
			}
			function I() {
				const e = document.createElement("div");
				e.classList.add("bottom", "display-none");
				const a = document.createElement("div");
				a.classList.add("top", "display-none"),
				T.push(e),
				T.push(a),
				T.forEach(function (e) {
					e.classList.add("stage", "UI"),
					J.div.appendChild(e)
				}),
				L.classList.add("deploy-btn", "btn", "UI", "display-none"),
				L.textContent = "Deploy",
				J.div.appendChild(L),
				L.addEventListener("click", function () {
					T[0].hasChildNodes() || T[1].hasChildNodes() ? alert("Need to choose lanes for all Heros") : function () {
						(function () {
							for (let e = 0; e < 2; e++)
								T[e].classList.add("display-none"), u.lanes.forEach(function (a) {
									a.stages[e].classList.add("display-none")
								})
						})(),
						L.classList.add("display-none");
						for (let e = 0; e < 3; e++) {
							let a = u.lanes[e];
							a.summon([H[0][e], H[1][e]], !1),
							0 != J.getRound() && a.cards.forEach(function (e, t) {
								e.forEach(function (e, n) {
									null != e.Name && e.rndArrow(a, t, n)
								})
							})
						}
						J.dispatchEvent("continuousRefresh"),
						J.players.forEach(function (e) {
							e.draw(),
							e.draw()
						}),
						J.nextTurn(),
						J.dispatchEvent("beforeTheActionPhase"),
						D.show(),
						S.show()
					}
					()
				}),
				u.lanes.forEach(function (e, a) {
					e.stages.forEach(function (e, t) {
						e.ondragover = M,
						e.ondragenter = R,
						e.ondragleave = B,
						e.ondrop = function (n) {
							n.preventDefault(),
							B(n),
							b.player == J.players[t] && "Hero" == b.CardType && (e.appendChild(b.div), H[t][a].push(b), b.div.draggable = !1)
						}
					})
				})
			}
			function P() {
				H[0] = [[], [], []],
				H[1] = [[], [], []],
				null == T[0] && I(),
				u.div.classList.add("zoom-out"),
				J.div.classList.add("zoom-out"),
				function () {
					for (let e = 0; e < 2; e++)
						T[e].classList.remove("display-none"), u.lanes.forEach(function (a) {
							a.stages[e].classList.remove("display-none")
						})
				}
				(),
				H.forEach(function (e, a) {
					for (let t = 0; t < 2; t++) {
						let t = Math.floor(3 * Math.random()),
						n = E(V.Cards.find(function (e) {
									return "Melee Creep" == e.Name
								}), J.players[a]);
						e[t].push(n),
						u.lanes[t].stages[a].appendChild(n.div)
					}
					if (0 == J.getRound()) {
						let i = Math.floor(3 * Math.random());
						e[i].length >= 2 && (i = (i + 1 + (Math.random() < .5)) % 3);
						let r = E(V.Cards.find(function (e) {
									return "Melee Creep" == e.Name
								}), J.players[a]);
						e[i].push(r),
						u.lanes[i].stages[a].appendChild(r.div),
						i = n([0, 1, 2]);
						for (var t = 0; t < 3; t++) {
							let n = J.players[a].getHeros()[t];
							u.lanes[i[t]].stages[a].appendChild(n.div),
							e[i[t]].push(n)
						}
					}
					J.extraDeploy[a].forEach(function (t, n) {
						t.forEach(function (t) {
							e[n].push(t),
							u.lanes[n].stages[a].appendChild(t.div)
						}),
						t.splice(0)
					}),
					J.players[a].getHeros().forEach(function (t) {
						if (0 == t.respawn && 0 != J.getRound())
							if (J.players[a].computer) {
								let n = Math.floor(3 * Math.random());
								e[n].push(t),
								u.lanes[n].stages[a].appendChild(t.div)
							} else
								T[a].appendChild(t.div), t.div.draggable = !0, t.updateDisplay();
						t.respawn -= 1
					})
				}),
				L.classList.remove("display-none")
			}
			var N = (() => {
				const e = document.getElementById("shop"),
				a = document.getElementById("secret-shop"),
				t = document.getElementById("item-deck"),
				i = document.getElementById("consumables"),
				r = document.createElement("button");
				let s;
				r.innerHTML = "Done",
				r.classList.add("close-btn", "btn"),
				r.type = "submit",
				e.appendChild(r);
				let d = ["Healing Salve", "Town Portal Scroll", "Fountain Flask", "Potion of Knowledge"];
				r.addEventListener("click", function () {
					e.classList.add("display-none"),
					a.firstChild && a.removeChild(a.firstChild),
					Q.push(s.Name),
					s = null,
					t.firstChild && t.removeChild(t.firstChild),
					i.firstChild && i.removeChild(i.firstChild),
					P()
				});
				const c = (e, a = !1) => {
					let i;
					if (a && (e = n(e)), null != (i = a ? e.shift() : e[Math.floor(Math.random() * e.length)])) {
						let e = E(V.Cards.find(function (e) {
									return e.Name == i
								}), J.players[0]);
						return e.div.addEventListener("click", function n(i) {
							J.players[0].gold >= e.GoldCost && (J.players[0].gold -= e.GoldCost, J.infoDisplayUpdate(), J.players[0].hand.push(e), J.players[0].handDiv.appendChild(e.div), a && (s = c(Q, !0)) && t.appendChild(s.div), e.div.removeEventListener("click", n))
						}),
						e
					}
					return !1
				};
				return {
					show: () => {
						s = c(Q, !0);
						let n = c(d),
						l = c(ae);
						a.appendChild(l.div),
						s && t.appendChild(s.div),
						i.appendChild(n.div),
						e.classList.remove("display-none"),
						r.focus()
					}
				}
			})();
			var W = () => {
				const e = [],
				a = [document.getElementById("info-bottom"), document.getElementById("info-top")];
				J.players.forEach(function (t, n) {
					a[n].classList.remove("display-none"),
					a[n].getElementsByClassName("name")[0].textContent = `${t.name}`,
					e.push(a[n].getElementsByClassName("gold")[0]),
					e[n].textContent = t.gold
				});
				return {
					updateDisplay: () => {
						J.players.forEach(function (a, t) {
							e[t].textContent = a.gold
						})
					}
				}
			};
			var F = (() => {
				const e = e => {
					if ("ADC" != e.substring(0, "ADC".length))
						return !1;
					let a = e.substring("ADC".length);
					a = (a = a.replace(/-/g, "/")).replace(/_/g, "=");
					let t = window.atob(a),
					n = [];
					for (var i = 0; i < t.length; i++)
						n.push(t.charCodeAt(i));
					return n
				},
				a = (e, a, t, n) => {
					let i = 1 << a,
					r = e & i - 1;
					return n[0] |= r << t,
					0 != (e & i)
				},
				t = (e, t, n, i, r, s) => {
					s[0] = 0;
					let d = 0;
					if (0 == t || a(e, t, d, s))
						for (d += t; ; ) {
							if (i[0] > r)
								return !1;
							let e = n[i[0]++];
							if (!a(e, 7, d, s))
								break;
							d += 7
						}
					return !0
				},
				n = (e, a, n, i, r, s) => {
					if (a[0] > n)
						return !1;
					let d = e[a[0]++],
					c = d >> 6 == 3,
					l = [0];
					if (!t(d, 5, e, a, n, l))
						return !1;
					if (s[0] = i[0] + l[0], c) {
						if (!t(0, 0, e, a, n, r))
							return !1
					} else
						r[0] = 1 + (d >> 6);
					return i[0] = s[0],
					!0
				},
				i = (e, a) => {
					let i = [0],
					r = a.length,
					s = a[i[0]++],
					d = s >> 4;
					if (2 != d && 1 != d)
						return !1;
					let c = a[i[0]++],
					l = 0;
					d > 1 && (l = a[i[0]++]);
					let o = r - l,
					m = 0;
					for (let e = i[0]; e < o; e++)
						m += a[e];
					if (c != (255 & m))
						return !1;
					let f = [0];
					if (!t(s, 3, a, i, o, f))
						return !1;
					let p = [],
					g = [0];
					for (let e = 0; e < f[0]; e++) {
						let e = [0],
						t = [0];
						if (!n(a, i, o, g, e, t))
							return !1;
						p.push({
							id: t[0],
							turn: e[0]
						})
					}
					let _ = [];
					for (g[0] = 0; i[0] <= o; ) {
						let e = [0],
						t = [0];
						if (!n(a, i, r, g, e, t))
							return !1;
						_.push({
							id: t[0],
							count: e[0]
						})
					}
					let h = "";
					if (i[0] <= r) {
						h = a.slice(-1 * l)
					}
					return {
						heroes: p,
						cards: _,
						name: h
					}
				};
				return {
					DecodeDeckString: e,
					ParseDeck: a => {
						let t = e(a);
						return !!t && i(a, t)
					}
				}
			})();
			let G = {
				card_set: {
					version: 1,
					set_info: {
						set_id: 0,
						pack_item_def: 0,
						name: {
							english: "Base Set"
						}
					},
					card_list: [{
							card_id: 1e3,
							base_card_id: 1e3,
							card_type: "Stronghold",
							card_name: {
								english: "Ancient Tower"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1000.91b2ed80da07ef5cf343540b09687fbf875168c8.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1000_large_english.3dea67025da70c778d014dc3aae80c0c0a7008a6.png"
							},
							ingame_image: {},
							hit_points: 80,
							references: []
						}, {
							card_id: 1001,
							base_card_id: 1001,
							card_type: "Stronghold",
							card_name: {
								english: "Defense Tower"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1001.91b2ed80da07ef5cf343540b09687fbf875168c8.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1001_large_english.45b8e6f03bf269136849e46f7f2ec0949306fb1b.png"
							},
							ingame_image: {},
							hit_points: 40,
							references: []
						}, {
							card_id: 1007,
							base_card_id: 1007,
							card_type: "Stronghold",
							card_name: {
								english: "Ancient Rubble"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1007.91b2ed80da07ef5cf343540b09687fbf875168c8.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1007_large_english.e72edb0612e945a92fd2800bbcd0bcacba0bd9ec.png"
							},
							ingame_image: {},
							references: []
						}, {
							card_id: 1002,
							base_card_id: 1002,
							card_type: "Pathing",
							card_name: {
								english: "Left Path"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1002.95db07546620aa3431e88471ac839c34ac1547f9.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1002_large_english.570fd2a803121615a59744869e45f605c43d33e4.png"
							},
							ingame_image: {},
							references: []
						}, {
							card_id: 1003,
							base_card_id: 1003,
							card_type: "Pathing",
							card_name: {
								english: "Forward Path"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1003.71bdeca5dc7d774bf98580b882282f0041fd7837.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1003_large_english.bff02317c20fe50c81d7981281744a8eed188076.png"
							},
							ingame_image: {},
							references: []
						}, {
							card_id: 1004,
							base_card_id: 1004,
							card_type: "Pathing",
							card_name: {
								english: "Right Path"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1004.7b798d05d890521a20135c6a3fa33b2458dceb72.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1004_large_english.51568c12ffead47605e8a2263f70029e5c988449.png"
							},
							ingame_image: {},
							references: []
						}, {
							card_id: 1005,
							base_card_id: 1005,
							card_type: "Pathing",
							card_name: {
								english: "Forward Path 2"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1005.7b798d05d890521a20135c6a3fa33b2458dceb72.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1005_large_english.043d1226a80e4706a97eb24062021dee1a018ac5.png"
							},
							ingame_image: {},
							references: []
						}, {
							card_id: 1006,
							base_card_id: 1006,
							card_type: "Creep",
							card_name: {
								english: "Melee Creep"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1006.3c1f2d846354e3ddf9e0d5eef105334f66120813.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1006_large_english.ca8ad07b111f6823f55725b23878b82732a004e2.png"
							},
							ingame_image: {},
							illustrator: "Forrest Imel",
							mana_cost: 3,
							attack: 2,
							hit_points: 4,
							references: []
						}, {
							card_id: 1009,
							base_card_id: 1009,
							card_type: "Creep",
							card_name: {
								english: "Zombie"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1009.d79cdef2d7088a2b43ad3c52d23825f10e7282e6.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/1009_large_english.cf3319339b94239832fb782dfebc46e782d92dce.png"
							},
							ingame_image: {},
							illustrator: "Forrest Imel",
							is_black: !0,
							mana_cost: 1,
							attack: 2,
							hit_points: 2,
							references: []
						}, {
							card_id: 3e3,
							base_card_id: 3e3,
							card_type: "Item",
							card_name: {
								english: "Traveler's Cloak"
							},
							card_text: {
								english: "Equipped hero has +4 Health."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3000.da00fd40824357ba4c29d5d061bdca37a10cabb5.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3000_large_english.779b1e0d4b42be4615fc0517535483b7344f0bc5.png"
							},
							ingame_image: {},
							illustrator: "Julie Baroh",
							sub_type: "Accessory",
							gold_cost: 3,
							references: []
						}, {
							card_id: 3001,
							base_card_id: 3001,
							card_type: "Item",
							card_name: {
								english: "Leather Armor"
							},
							card_text: {
								english: "Equipped hero has +1 Armor."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3001.58dda411888ee32c293e911a86f9bf2562e8aa68.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3001_large_english.e0e49c36c7093e62203410043e9146079f3b695f.png"
							},
							ingame_image: {},
							illustrator: "Pauline Voss",
							sub_type: "Armor",
							gold_cost: 3,
							references: []
						}, {
							card_id: 3002,
							base_card_id: 3002,
							card_type: "Item",
							card_name: {
								english: "Short Sword"
							},
							card_text: {
								english: "Equipped hero has +2 Attack."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3002.6c91be124a62a6e22ccda8d5b86b3b4c8e2fef17.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3002_large_english.a93680da3ffbe748a4a5d67e3c0aae1dd713e719.png"
							},
							ingame_image: {},
							illustrator: "Tommy Arnold",
							sub_type: "Weapon",
							gold_cost: 3,
							references: []
						}, {
							card_id: 3003,
							base_card_id: 3003,
							card_type: "Item",
							card_name: {
								english: "Healing Salve"
							},
							card_text: {
								english: "Heal a unit 6."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3003.79bd2290d75a4de2ca2c525a1ee5615166058a8a.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3003_large_english.4a1de0e6e6adb612e930f2a8b2daaeb43e91deb1.png"
							},
							ingame_image: {},
							illustrator: "Julie Baroh",
							sub_type: "Consumable",
							gold_cost: 3,
							references: []
						}, {
							card_id: 3004,
							base_card_id: 3004,
							card_type: "Item",
							card_name: {
								english: "Fountain Flask"
							},
							card_text: {
								english: "Fully heal a unit."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3004.d27fa94e0d8ae828f80bf40e6c15148514f7648a.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3004_large_english.497baa746b57999e8b1e9f1e5e1a6780113731e4.png"
							},
							ingame_image: {},
							illustrator: "Suzanne Helmigh",
							sub_type: "Consumable",
							gold_cost: 4,
							references: []
						}, {
							card_id: 3005,
							base_card_id: 3005,
							card_type: "Item",
							card_name: {
								english: "Potion of Knowledge"
							},
							card_text: {
								english: "Draw a card."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3005.80098aa7eb3799b958d4de8bff8c577e2c80fba6.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3005_large_english.f2701922654bf83ce9b5a317e8210a31435ecba1.png"
							},
							ingame_image: {},
							illustrator: "Magali Villeneuve",
							sub_type: "Consumable",
							gold_cost: 5,
							references: []
						}, {
							card_id: 3006,
							base_card_id: 3006,
							card_type: "Item",
							card_name: {
								english: "Town Portal Scroll"
							},
							card_text: {
								english: "Return an allied hero to the Fountain."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3006.9dba468ce4b98978d1115ff24f3f8dfcc37659fc.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/3006_large_english.288b83ce7c96f65b74c2171ada3bdb304580bd85.png"
							},
							ingame_image: {},
							illustrator: "Pauline Voss",
							sub_type: "Consumable",
							gold_cost: 3,
							references: []
						}, {
							card_id: 4e3,
							base_card_id: 4e3,
							card_type: "Hero",
							card_name: {
								english: "Fahrvhan the Dreamer"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4000.049cff338ab7274d0dcde4d4e3ec5bc5bcdd2a8e.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4000_large_english.f4557af34d7079f579a0e66e8d1aae9cebad6f73.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4000_ingame.cb1d509e48befec604e5ca48a6fe0752ff2ff1e5.png"
							},
							illustrator: "Wisnu Tan",
							is_green: !0,
							attack: 4,
							hit_points: 10,
							references: [{
									card_id: 4002,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 4001,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 4001,
							base_card_id: 4001,
							card_type: "Passive Ability",
							card_name: {
								english: "Pack Leadership"
							},
							card_text: {
								english: "Fahrvhan the Dreamer's allied neighbors have +1 Armor."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 4002,
							base_card_id: 4002,
							card_type: "Creep",
							card_name: {
								english: "Prowler Vanguard"
							},
							card_text: {
								english: "Prowler Vanguard's allied neighbors have +1 Armor."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4002.b1bcc606172e9963bfa54ce14b2c6308d315b56d.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4002_large_english.baed8e58756c2ada9fda6fb026f9e5c36b28d5c6.png"
							},
							ingame_image: {},
							illustrator: "Wisnu Tan",
							is_green: !0,
							mana_cost: 4,
							hit_points: 6,
							references: []
						}, {
							card_id: 4003,
							base_card_id: 4003,
							card_type: "Hero",
							card_name: {
								english: "Keefe the Bold"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4003.2cc81eb5cf6375fdfad19781634a37df496e20c0.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4003_large_english.179cc319885d257b93187c3529be4007ae5ad2fa.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4003_ingame.754e1c3ccfaa3b0b0921ff0fba171aef6d343ca8.png"
							},
							illustrator: "Lius Lasahido",
							is_red: !0,
							attack: 6,
							armor: 1,
							hit_points: 11,
							references: [{
									card_id: 4004,
									ref_type: "includes",
									count: 3
								}
							]
						}, {
							card_id: 4004,
							base_card_id: 4004,
							card_type: "Spell",
							card_name: {
								english: "Fighting Instinct"
							},
							card_text: {
								english: "Modify a <span style='font-weight:bold;color:#c2352d;'>strength hero</span> with +1 Attack and +1 Armor."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4004.7a24a893bab45fddaa22ab7659ad427bb6ddaa21.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4004_large_english.fbf9afd240c50f812f9567f1630d6c7815b70739.png"
							},
							ingame_image: {},
							illustrator: "Lius Lasahido",
							is_red: !0,
							mana_cost: 5,
							references: []
						}, {
							card_id: 4005,
							base_card_id: 4005,
							card_type: "Hero",
							card_name: {
								english: "Debbi the Cunning"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4005.ceab77c296987994f9dfbc5f27bfcbb3fefde14a.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4005_large_english.5bb3428163fd31213274a21003ac90fe7b522b8b.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4005_ingame.fa80d8637ebe79e37f2e6b332de59de4d7bc568a.png"
							},
							illustrator: "Livia Prima",
							is_black: !0,
							attack: 7,
							hit_points: 5,
							references: [{
									card_id: 4007,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 4006,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 4006,
							base_card_id: 4006,
							card_type: "Passive Ability",
							card_name: {
								english: "Work the Knife"
							},
							card_text: {
								english: "Debbi the Cunning deals +2 damage when attacking a hero or tower."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 4007,
							base_card_id: 4007,
							card_type: "Spell",
							card_name: {
								english: "No Accident"
							},
							card_text: {
								english: "Deal 3 damage to a unit."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4007.53db98297ccfc48f3cb87d7a1beee39fb0e356c4.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4007_large_english.6b747b0ff9cadd921c43d6b4925a9be5bdbf3f6b.png"
							},
							ingame_image: {},
							illustrator: "Livia Prima",
							is_black: !0,
							mana_cost: 3,
							references: []
						}, {
							card_id: 4008,
							base_card_id: 4008,
							card_type: "Hero",
							card_name: {
								english: "J'Muy the Wise"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 4:</span> Draw a card."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4008.35f4da08e371db6ecc077f4aad08113dac8cc4de.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4008_large_english.2f24843475c7fd6373037e7d32c75779ae40f3de.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4008_ingame.094a2c09317b5d7b0dbce840c3384811912e0e06.png"
							},
							illustrator: "Billy Christian",
							is_blue: !0,
							attack: 3,
							hit_points: 8,
							references: [{
									card_id: 4010,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 4009,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 4009,
							base_card_id: 4009,
							card_type: "Ability",
							card_name: {
								english: "Wisdom of the Elders"
							},
							card_text: {
								english: "Draw a card."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 4010,
							base_card_id: 4010,
							card_type: "Spell",
							card_name: {
								english: "Battlefield Control"
							},
							card_text: {
								english: "Choose a unit. Choose a combat target for it."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4010.5627b0170ff8a8242d046fcf5308a46f13ad2b06.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set00/4010_large_english.8991fca674f4519582469170d30288cc40de9d62.png"
							},
							ingame_image: {},
							illustrator: "Billy Christian",
							is_blue: !0,
							mana_cost: 1,
							references: []
						}
					]
				}
			},
			U = {
				card_set: {
					version: 1,
					set_info: {
						set_id: 1,
						pack_item_def: 1e3,
						name: {
							english: "Call to Arms"
						}
					},
					card_list: [{
							card_id: 10001,
							base_card_id: 10001,
							card_type: "Hero",
							card_name: {
								english: "Venomancer"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10001.c2456641c9dd1b758dd7a0caf5e2a56f727a51f8.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10001_large_english.0016437a592df68bd7c15edaef2ccf06a99e1559.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10001_ingame.1c347d3e7359e39d7ca61f6add8b06604b9ecffd.png"
							},
							illustrator: "JiHun Lee",
							rarity: "Common",
							is_blue: !0,
							item_def: 110001,
							attack: 2,
							hit_points: 6,
							references: [{
									card_id: 10002,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10491,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10491,
							base_card_id: 10491,
							card_type: "Passive Ability",
							card_name: {
								english: "Venomous Nature"
							},
							card_text: {
								english: "Summon a <span style='font-weight:bold;color:#ffffff;'>Plague Ward</span> into Venomancer's lane each deployment phase."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: [{
									card_id: 10003,
									ref_type: "references"
								}
							]
						}, {
							card_id: 10002,
							base_card_id: 10002,
							card_type: "Spell",
							card_name: {
								english: "Siege Units"
							},
							card_text: {
								english: "Summon two <span style='font-weight:bold;color:#ffffff;'>Plague Wards</span>."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10002.68a876b165ec268ce38d3681a4c3a94a5cbc6a53.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10002_large_english.40279c11112761bd6737d03c2a17566d6ae7bd8e.png"
							},
							ingame_image: {},
							illustrator: "JiHun Lee",
							is_blue: !0,
							mana_cost: 4,
							references: [{
									card_id: 10003,
									ref_type: "references"
								}
							]
						}, {
							card_id: 10003,
							base_card_id: 10003,
							card_type: "Creep",
							card_name: {
								english: "Plague Ward"
							},
							card_text: {
								english: "Before the action phase, deal 2 piercing damage to a random enemy neighbor of Plague Ward."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10003.776af3d9fa1c77d9e8066038861660153cc9f6b3.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10003_large_english.6fab18cb97f12621e6b5de2a76c66ff8883648a0.png"
							},
							ingame_image: {},
							illustrator: "JiHun Lee",
							is_blue: !0,
							mana_cost: 3,
							attack: 1,
							hit_points: 3,
							references: []
						}, {
							card_id: 10004,
							base_card_id: 10004,
							card_type: "Hero",
							card_name: {
								english: "Meepo"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 2:</span> Move Meepo to an allied <span style='font-weight:bold;color:#ffffff;'>Meepo</span>'s lane.  Deal 2 damage to the new enemy neighbors."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10004.8e77e6463c971dab1fa01b3761808eb2cf5163b0.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10004_large_english.3fe0105079199e7b70dd200e8ce59dcc6202becd.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10004_ingame.abad49f30c45897120d06d3bef0db20798800c49.png"
							},
							illustrator: "Wisnu Tan",
							rarity: "Rare",
							is_blue: !0,
							item_def: 110004,
							attack: 4,
							hit_points: 5,
							references: [{
									card_id: 10005,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10429,
									ref_type: "active_ability"
								}, {
									card_id: 10490,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10429,
							base_card_id: 10429,
							card_type: "Ability",
							card_name: {
								english: "Poof"
							},
							card_text: {
								english: "Move Meepo to an allied <span style='font-weight:bold;color:#ffffff;'>Meepo</span>'s lane.  Deal 2 damage to the new enemy neighbors."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: [{
									card_id: 10004,
									ref_type: "references"
								}
							]
						}, {
							card_id: 10490,
							base_card_id: 10490,
							card_type: "Passive Ability",
							card_name: {
								english: "United We Fall"
							},
							card_text: {
								english: "Meepo has Soulbound. (If Meepo dies, other allied Meepos in every lane also die.)"
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10005,
							base_card_id: 10005,
							card_type: "Spell",
							card_name: {
								english: "Divided We Stand"
							},
							card_text: {
								english: "Summon a <span style='font-weight:bold;color:#ffffff;'>Meepo</span>."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10005.0d4ea601200a728eb864a53232880e0ed7b119ad.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10005_large_english.1dd1976e658a04d9e5f397809e1644987c70cc24.png"
							},
							ingame_image: {},
							illustrator: "Wisnu Tan",
							is_blue: !0,
							mana_cost: 4,
							references: [{
									card_id: 10004,
									ref_type: "references"
								}
							]
						}, {
							card_id: 10006,
							base_card_id: 10006,
							card_type: "Hero",
							card_name: {
								english: "Luna"
							},
							card_text: {
								english: "Lucent Beam<BR>\nBefore the action phase, deal 1 piercing damage to a random enemy and add a charge to each <span style='font-weight:bold;color:#ffffff;'>Eclipse</span> card in your hand or deck."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10006.ee9329205440996f09bdcc600c6aaeaa8440c44b.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10006_large_english.39e1134ac75a27f1ffcc5dd439fe50f4230f66f1.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10006_ingame.89d98455aa3b6db2aac61d258774b198540b7dbd.png"
							},
							illustrator: "Anthony Palumbo",
							rarity: "Uncommon",
							is_blue: !0,
							item_def: 110006,
							attack: 3,
							hit_points: 8,
							references: [{
									card_id: 10007,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10489,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10489,
							base_card_id: 10489,
							card_type: "Passive Ability",
							card_name: {
								english: "Lucent Beam"
							},
							card_text: {
								english: "Before the action phase, deal 1 piercing damage to a random enemy and add a charge to three random <span style='font-weight:bold;color:#ffffff;'>Eclipse</span> cards in your hand or deck."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: [{
									card_id: 10007,
									ref_type: "references"
								}
							]
						}, {
							card_id: 10007,
							base_card_id: 10007,
							card_type: "Spell",
							card_name: {
								english: "Moon Glaves"
							},
							card_text: {
								english: "Repeat one time for each charge:  Deal 3 piercing damage to a random enemy."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10007.07294b44cc2bb4b5cafbfd9f76d310c52e355412.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10007_large_english.718061e8ce8ad236554757b4f3054294da14a425.png"
							},
							ingame_image: {},
							illustrator: "Anthony Palumbo",
							is_blue: !0,
							mana_cost: 6,
							references: []
						}, {
							card_id: 10010,
							base_card_id: 10010,
							card_type: "Hero",
							card_name: {
								english: "Winter Wyvern"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 2:</span> Move Winter Wyvern to an empty combat position and give it +4 Attack this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10010.ad0a64e7f9814fc0cb1c7e2aa4b217e549239bb6.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10010_large_english.d993b7b12fb43faaaca6f583dddc1fe6c973727c.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10010_ingame.633228c1be0c51fb3416a901351e42397ccc9912.png"
							},
							illustrator: "Sung Choi",
							rarity: "Uncommon",
							is_black: !0,
							item_def: 110010,
							attack: 6,
							hit_points: 6,
							references: [{
									card_id: 10011,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10430,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10430,
							base_card_id: 10430,
							card_type: "Ability",
							card_name: {
								english: "Arctic Burn"
							},
							card_text: {
								english: "Move Winter Wyvern to an empty combat position and give it +4 Attack this round."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10011,
							base_card_id: 10011,
							card_type: "Spell",
							card_name: {
								english: "Winter's Curse"
							},
							card_text: {
								english: "Disarm a unit until end of round.  That unit's allied neighbors battle it."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10011.092b9f98ad10895c3d108fc05388de8f2f0a6b9c.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10011_large_english.78062875b76669d8b57c4ab831d15896881a124b.png"
							},
							ingame_image: {},
							illustrator: "Sung Choi",
							is_black: !0,
							mana_cost: 6,
							references: []
						}, {
							card_id: 10014,
							base_card_id: 10014,
							card_type: "Hero",
							card_name: {
								english: "Lycan"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10014.d0b682f37b2b7b777078f811bdf93a6fa5231ac5.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10014_large_english.28fcf2e633a18a32f53974fb37e71e4ad731644b.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10014_ingame.1a79bc32dfc3ba6a9b73887d6db75704ef9d14df.png"
							},
							illustrator: "Ryan Pancoast",
							rarity: "Common",
							is_green: !0,
							item_def: 110014,
							attack: 4,
							hit_points: 10,
							references: [{
									card_id: 10112,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10494,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10494,
							base_card_id: 10494,
							card_type: "Passive Ability",
							card_name: {
								english: "Feral Impulse"
							},
							card_text: {
								english: "Lycan's allied neighbors have +2 Attack."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10016,
							base_card_id: 10016,
							card_type: "Hero",
							card_name: {
								english: "Abaddon"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 2:</span> Fully heal Abaddon and give it Damage Immunity this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10016.49550e3b17ccf2611eb71b22f58664ae338be8ae.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10016_large_english.5150df4c69a05765b774c8399d02a920b90e76f7.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10016_ingame.e554b0820026fab65e0d93a6c236f3971ff9aa0d.png"
							},
							illustrator: "Chase Stone",
							rarity: "Uncommon",
							is_green: !0,
							item_def: 110016,
							attack: 4,
							hit_points: 9,
							references: [{
									card_id: 10287,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10431,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10431,
							base_card_id: 10431,
							card_type: "Ability",
							card_name: {
								english: "Borrowed Time"
							},
							card_text: {
								english: "Fully heal Abaddon and give it Damage Immunity this round."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10017,
							base_card_id: 10017,
							card_type: "Hero",
							card_name: {
								english: "Chen"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 4:</span> Get control of an enemy creep."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10017.c755182fd873b5df7f4d9bf6075dc1065021b560.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10017_large_english.187ab344d997742631e0cad195210e777dc8659e.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10017_ingame.6ebdad88afa95fd63b1833564028e432b0ac2d30.png"
							},
							illustrator: "Clint Cearley",
							rarity: "Rare",
							is_green: !0,
							item_def: 110017,
							attack: 4,
							hit_points: 9,
							references: [{
									card_id: 10340,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10432,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10432,
							base_card_id: 10432,
							card_type: "Ability",
							card_name: {
								english: "Holy Persuasion"
							},
							card_text: {
								english: "Get control of an enemy creep."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10018,
							base_card_id: 10018,
							card_type: "Hero",
							card_name: {
								english: "Bloodseeker"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10018.99a88322fecd54fc5fe195cd8a12f49bc64e424c.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10018_large_english.239e0941bd5d329e0b0c33b8150e11d46f622f00.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10018_ingame.e30c301154cb882531366a397486b99bdadf4004.png"
							},
							illustrator: "Lake Hurwitz",
							rarity: "Common",
							is_black: !0,
							item_def: 110018,
							attack: 7,
							hit_points: 6,
							references: [{
									card_id: 10289,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10496,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10496,
							base_card_id: 10496,
							card_type: "Passive Ability",
							card_name: {
								english: "Blood Bath"
							},
							card_text: {
								english: "Fully heal Bloodseeker after a unit blocking it dies."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10020,
							base_card_id: 10020,
							card_type: "Hero",
							card_name: {
								english: "Axe"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10020.023febd622949d771d9f6a4322efc339ced8c560.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10020_large_english.05bd2287b6ad738658707f8ca768acf0c4762682.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10020_ingame.4b1773e0546ae29327b3d1be27455ca6b38bc4bc.png"
							},
							illustrator: "Tyler Jacobson",
							rarity: "Rare",
							is_red: !0,
							item_def: 110020,
							attack: 7,
							armor: 2,
							hit_points: 11,
							references: [{
									card_id: 10288,
									ref_type: "includes",
									count: 3
								}
							]
						}, {
							card_id: 10021,
							base_card_id: 10021,
							card_type: "Hero",
							card_name: {
								english: "Centaur Warrunner"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10021.f655334174b3964b58604e3cfa80360e06d83004.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10021_large_english.3fd8680828aa438f2b78e29082a851c8070d3e23.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10021_ingame.ef3cf78a69b914097f4cf8ad54b89cc03a96f4e9.png"
							},
							illustrator: "Lius Lasahido",
							rarity: "Rare",
							is_red: !0,
							item_def: 110021,
							attack: 4,
							hit_points: 14,
							references: [{
									card_id: 10292,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10497,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10497,
							base_card_id: 10497,
							card_type: "Passive Ability",
							card_name: {
								english: "Return"
							},
							card_text: {
								english: "Centaur Warrunner has +2 Retaliate."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10022,
							base_card_id: 10022,
							card_type: "Hero",
							card_name: {
								english: "Timbersaw"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10022.065c0b1ce65b1f201bca225121177c2d19df2c89.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10022_large_english.dc03b0b77135dac4f5d90c01b8a1d2d5c4c78573.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10022_ingame.298367b2c0a9d5a83a290c4b26c4db8118bc1f0a.png"
							},
							illustrator: "JiHun Lee",
							rarity: "Uncommon",
							is_red: !0,
							item_def: 110022,
							attack: 4,
							hit_points: 11,
							references: [{
									card_id: 10296,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10498,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10498,
							base_card_id: 10498,
							card_type: "Passive Ability",
							card_name: {
								english: "Reactive Armor"
							},
							card_text: {
								english: "Timbersaw has +1 Armor for each of its attackers."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10023,
							base_card_id: 10023,
							card_type: "Hero",
							card_name: {
								english: "Bounty Hunter"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10023.503fcb60e0cdc30aa1d5a6f858a4050e3315b5f0.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10023_large_english.9cfa5c4dc8ebff64be2469612a6f1cf8f12a90a6.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10023_ingame.98f5e792764681cf0d2662d6e38a8ff430404cb7.png"
							},
							illustrator: "E.M. Gist",
							rarity: "Common",
							is_black: !0,
							item_def: 110023,
							attack: 7,
							hit_points: 7,
							references: [{
									card_id: 10416,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10499,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10499,
							base_card_id: 10499,
							card_type: "Passive Ability",
							card_name: {
								english: "Jinada"
							},
							card_text: {
								english: "Before the action phase, there is a 50% chance to give Bounty Hunter +4 Attack this round."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10024,
							base_card_id: 10024,
							card_type: "Hero",
							card_name: {
								english: "Tidehunter"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 4:</span> Stun Tidehunter's enemy neighbors this round and each other enemy has a 50% chance of being stunned this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10024.1ffefd6bce93c5753f51eefdd39e1089b810b08b.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10024_large_english.f0d499f731aa479aa60f38cba460f948db9beead.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10024_ingame.79325d3e4ff8841ba2833786d5d7c3bc9f3a5d8a.png"
							},
							illustrator: "Daarken",
							rarity: "Uncommon",
							is_red: !0,
							item_def: 110024,
							attack: 2,
							armor: 1,
							hit_points: 18,
							references: [{
									card_id: 10290,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10434,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10434,
							base_card_id: 10434,
							card_type: "Ability",
							card_name: {
								english: "Ravage"
							},
							card_text: {
								english: "Stun Tidehunter's enemy neighbors this round and each other enemy has a 50% chance of being stunned this round."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10025,
							base_card_id: 10025,
							card_type: "Hero",
							card_name: {
								english: "Tinker"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 3:</span> Deal 3 damage to a unit and disarm it this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10025.33033b1e8b19d9a934322355077aef6467115d73.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10025_large_english.f6158ee8068ebb66d697267ebde3b6f3a2220346.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10025_ingame.21005804eb139e25697a143575fe5b0cac36c579.png"
							},
							illustrator: "James Paick",
							rarity: "Rare",
							is_black: !0,
							item_def: 110025,
							attack: 7,
							hit_points: 5,
							references: [{
									card_id: 10291,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10435,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10435,
							base_card_id: 10435,
							card_type: "Ability",
							card_name: {
								english: "Laser"
							},
							card_text: {
								english: "Deal 3 damage to a unit and disarm it this round."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10026,
							base_card_id: 10026,
							card_type: "Hero",
							card_name: {
								english: "Rix"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10026.59c2df4317db54a08c492c3d78f23ed9206a2a17.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10026_large_english.abcb8ffcadc58021630cc3e593e8c156c8e2d90a.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10026_ingame.0b596f4469b0ad3050552849284804a8d1a986be.png"
							},
							illustrator: "Chris Rahn",
							rarity: "Uncommon",
							is_green: !0,
							item_def: 110026,
							attack: 3,
							hit_points: 7,
							references: [{
									card_id: 10420,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10500,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10500,
							base_card_id: 10500,
							card_type: "Passive Ability",
							card_name: {
								english: "Relentless Rebel"
							},
							card_text: {
								english: "Rix has Rapid Deployment."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10028,
							base_card_id: 10028,
							card_type: "Hero",
							card_name: {
								english: "Viper"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10028.50b8bc7588cab219f86ac87014b2c394d0ee5754.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10028_large_english.d6d7f27e4eb0ac7dc79468bac9b47793197dae75.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10028_ingame.f78ba0c0871819c7763bd3e7321554d176b7903a.png"
							},
							illustrator: "Lars Grant-West",
							rarity: "Uncommon",
							is_green: !0,
							item_def: 110028,
							attack: 4,
							hit_points: 10,
							references: [{
									card_id: 10294,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10501,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10501,
							base_card_id: 10501,
							card_type: "Passive Ability",
							card_name: {
								english: "Corrosive Skin"
							},
							card_text: {
								english: "When a unit deals battle damage to Viper, modify that unit with -1 Attack."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10029,
							base_card_id: 10029,
							card_type: "Hero",
							card_name: {
								english: "Beastmaster"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 3:</span> Summon a <span style='font-weight:bold;color:#ffffff;'>Loyal Beast</span>."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10029.9deae28f2a6715b2456e5844e2fdea7aaa28418f.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10029_large_english.7519e055e1d9dae67a891d23fa6e38b398c0ca35.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10029_ingame.0a80b175673b135a779857bd0fa9b347b5082144.png"
							},
							illustrator: "Clint Cearley",
							rarity: "Common",
							is_red: !0,
							item_def: 110029,
							attack: 5,
							hit_points: 12,
							references: [{
									card_id: 10293,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10437,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10437,
							base_card_id: 10437,
							card_type: "Ability",
							card_name: {
								english: "Call of the Wild"
							},
							card_text: {
								english: "Summon a <span style='font-weight:bold;color:#ffffff;'>Loyal Beast</span>."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: [{
									card_id: 10136,
									ref_type: "references"
								}
							]
						}, {
							card_id: 10030,
							base_card_id: 10030,
							card_type: "Hero",
							card_name: {
								english: "Bristleback"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10030.d6427ab9016cda608a66759ed0b5e8a51a532d0f.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10030_large_english.3c435935730fe8ac0218786e3994d2f34d4808cf.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10030_ingame.3637b79cc931a18328e3d324ee1a61dfc4e2c35b.png"
							},
							illustrator: "JiHun Lee",
							rarity: "Common",
							is_red: !0,
							item_def: 110030,
							attack: 8,
							hit_points: 12,
							references: [{
									card_id: 10419,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10502,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10502,
							base_card_id: 10502,
							card_type: "Passive Ability",
							card_name: {
								english: "Barroom Brawler"
							},
							card_text: {
								english: "Modify Bristleback with +2 Armor after a hero blocking it dies."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10031,
							base_card_id: 10031,
							card_type: "Hero",
							card_name: {
								english: "Kanna"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10031.967b53755c3a477cc89b05422018a06d08e837f2.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10031_large_english.154b9d25d36f6cc8db063613dd4d8c46d8e7d96c.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10031_ingame.f73eb3453e6882b39142225ac45c2ea7a1686044.png"
							},
							illustrator: "Scott M Fischer",
							rarity: "Rare",
							is_blue: !0,
							item_def: 110031,
							attack: 2,
							hit_points: 12,
							references: [{
									card_id: 10325,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10503,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10503,
							base_card_id: 10503,
							card_type: "Passive Ability",
							card_name: {
								english: "Bringer of Conquest"
							},
							card_text: {
								english: "The random allied <span style='font-weight:bold;color:#ffffff;'>Melee Creeps</span> are deployed into Kanna's lane."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: [{
									card_id: 1006,
									ref_type: "references"
								}
							]
						}, {
							card_id: 10032,
							base_card_id: 10032,
							card_type: "Hero",
							card_name: {
								english: "Drow Ranger"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10032.ac3532fc6482ff603748ddde2fb3564273a3b72e.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10032_large_english.8e5485d87ae127b5c159787abff77d4a3108426e.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10032_ingame.7fbb9f47159e639d43413a9f8dc37dc87f895bbf.png"
							},
							illustrator: "Livia Prima",
							rarity: "Rare",
							is_green: !0,
							item_def: 110032,
							attack: 4,
							hit_points: 7,
							references: [{
									card_id: 10339,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10504,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10504,
							base_card_id: 10504,
							card_type: "Passive Ability",
							card_name: {
								english: "Precision Aura"
							},
							card_text: {
								english: "Other allies in all lanes have +1 Attack."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10033,
							base_card_id: 10033,
							card_type: "Hero",
							card_name: {
								english: "Earthshaker"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 4:</span> Stun Earthshaker's enemy neighbors this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10033.7c8e9fa3eccd923d8433ed2b98aef717766ca0d9.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10033_large_english.c367d66dee9be70d4df941a014f5409e1e804345.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10033_ingame.12e1d59de9862d5f8ede3c0014fad6b7bf2ad3ff.png"
							},
							illustrator: "Forrest Imel",
							rarity: "Rare",
							is_blue: !0,
							item_def: 110033,
							attack: 2,
							hit_points: 7,
							references: [{
									card_id: 10323,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10438,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10438,
							base_card_id: 10438,
							card_type: "Ability",
							card_name: {
								english: "Fissure"
							},
							card_text: {
								english: "Stun Earthshaker's enemy neighbors this round."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10036,
							base_card_id: 10036,
							card_type: "Hero",
							card_name: {
								english: "Enchantress"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10036.995dc56212e8e8bf40471d3121262d43a82e7c31.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10036_large_english.808f7630e1100147ca239cc6cb89218e1e08af36.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10036_ingame.f65dfe92226c5bb9b5e401a6a1be9fa8265803a0.png"
							},
							illustrator: "Randy Vargas",
							rarity: "Common",
							is_green: !0,
							item_def: 110036,
							attack: 4,
							hit_points: 8,
							references: [{
									card_id: 10193,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10506,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10506,
							base_card_id: 10506,
							card_type: "Passive Ability",
							card_name: {
								english: "Nature's Attendants"
							},
							card_text: {
								english: "Enchantress has +2 Regeneration. Enchantress's allied neighbors have +2 Regeneration."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10038,
							base_card_id: 10038,
							card_type: "Hero",
							card_name: {
								english: "Lich"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 2:</span> Condemn another ally and draw a card. If that ally has 6 or more Attack, draw an extra card."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10038.26778b9a203a57b0d3ffb1bc75b7a0734e88c6c8.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10038_large_english.b556f149a226b9a2f520ec9ccd680f16ab5ad327.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10038_ingame.7544eda066c78d85403c1a96ed096435f7343341.png"
							},
							illustrator: "Wisnu Tan",
							rarity: "Rare",
							is_black: !0,
							item_def: 110038,
							attack: 5,
							hit_points: 9,
							references: [{
									card_id: 10318,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10440,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10440,
							base_card_id: 10440,
							card_type: "Ability",
							card_name: {
								english: "Sacrifice"
							},
							card_text: {
								english: "Condemn another ally and draw a card. If that ally has 6 or more Attack, draw an extra card."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10043,
							base_card_id: 10043,
							card_type: "Hero",
							card_name: {
								english: "Ogre Magi"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10043.4b52a60db821028ba02a7fb728988bec2842397f.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10043_large_english.5f5d7b24569b905cdf1ee922c5cd004ad7740dfb.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10043_ingame.127396b9101aa4b8d7c32f6a763a30becf82d575.png"
							},
							illustrator: "Randy Vargas",
							rarity: "Common",
							is_blue: !0,
							item_def: 110043,
							attack: 3,
							hit_points: 7,
							references: [{
									card_id: 10160,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10509,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10509,
							base_card_id: 10509,
							card_type: "Passive Ability",
							card_name: {
								english: "Multicast"
							},
							card_text: {
								english: "After you play a <span style='font-weight:bold;color:#2f7492;'>blue spell</span>, there is a 25% chance to put a base copy of that card into your hand."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10044,
							base_card_id: 10044,
							card_type: "Hero",
							card_name: {
								english: "Omniknight"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 2:</span> Heal a unit 3."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10044.5fe4f8195b2a005f6b40ab273b2504782e84d191.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10044_large_english.a795361b710d386f09449214a3d4a018176f35c8.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10044_ingame.72d9db93559dfb850db41b5c56dfa9324d525473.png"
							},
							illustrator: "Sam Carr",
							rarity: "Rare",
							is_green: !0,
							item_def: 110044,
							attack: 5,
							hit_points: 12,
							references: [{
									card_id: 10348,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10443,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10443,
							base_card_id: 10443,
							card_type: "Ability",
							card_name: {
								english: "Purification"
							},
							card_text: {
								english: "Heal a unit 3."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10046,
							base_card_id: 10046,
							card_type: "Hero",
							card_name: {
								english: "Outworld Devourer"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10046.959caac2a5c3a0e8efeec6af631337a483bb8795.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10046_large_english.c1b83169d088593c9c0cfca5a20f29528972f548.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10046_ingame.f93f51f512a39868f15a0adae08dbe098d2aa10b.png"
							},
							illustrator: "Joseph Meehan",
							rarity: "Uncommon",
							is_blue: !0,
							item_def: 110046,
							attack: 4,
							hit_points: 6,
							references: [{
									card_id: 10267,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10511,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10511,
							base_card_id: 10511,
							card_type: "Passive Ability",
							card_name: {
								english: "Essence Aura"
							},
							card_text: {
								english: "After you play a <span style='font-weight:bold;color:#2f7492;'>blue card</span>, there is a 50% chance to restore 2 Mana."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10047,
							base_card_id: 10047,
							card_type: "Hero",
							card_name: {
								english: "Phantom Assassin"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10047.dd94f5bc1b22bef2e9b18264c523d8e28704f728.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10047_large_english.5e9ee649024fb1a22c26b25b0c104e350d762f9f.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10047_ingame.77fafd6442149fa870af2246ef2e44e41bba38c0.png"
							},
							illustrator: "Greg Opalinski",
							rarity: "Common",
							is_black: !0,
							item_def: 110047,
							attack: 6,
							hit_points: 8,
							references: [{
									card_id: 10308,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10512,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10512,
							base_card_id: 10512,
							card_type: "Passive Ability",
							card_name: {
								english: "Efficient Killer"
							},
							card_text: {
								english: "Phantom Assassin deals +4 damage when attacking a hero."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10048,
							base_card_id: 10048,
							card_type: "Hero",
							card_name: {
								english: "Pugna"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 3:</span> Condemn a random enemy improvement."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10048.ca73a1b73aa37fc74a7807a69357e2e5641b01df.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10048_large_english.91a810d66f361ec3143999a33af415c1f2a1788c.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10048_ingame.727075c100ba4f0fa47e223c5fe671e920ed4d0c.png"
							},
							illustrator: "Randy Vargas",
							rarity: "Rare",
							is_red: !0,
							item_def: 110048,
							attack: 6,
							hit_points: 9,
							references: [{
									card_id: 10173,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10444,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10444,
							base_card_id: 10444,
							card_type: "Ability",
							card_name: {
								english: "Nether Blast"
							},
							card_text: {
								english: "Condemn a random enemy improvement."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10050,
							base_card_id: 10050,
							card_type: "Hero",
							card_name: {
								english: "Sniper"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 3:</span> Deal 5 damage to a unit."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10050.be0a865d3d49ca386d2a3835cc46eab52a923f47.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10050_large_english.7fbb5fb8fb13141bc063114c9e3cdb0edd8ad69b.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10050_ingame.9f298145ea43e62aa3e55fc6ba180e8b32f7e029.png"
							},
							illustrator: "Forrest Imel",
							rarity: "Uncommon",
							is_black: !0,
							item_def: 110050,
							attack: 5,
							hit_points: 6,
							references: [{
									card_id: 10272,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10446,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10446,
							base_card_id: 10446,
							card_type: "Ability",
							card_name: {
								english: "Headshot"
							},
							card_text: {
								english: "Deal 5 damage to a unit."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10052,
							base_card_id: 10052,
							card_type: "Hero",
							card_name: {
								english: "Mazzie"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10052.16b67615c0229d72fd946e7b9e2407420bbbf67f.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10052_large_english.3b5880b3181318c3e81d7bfce2da5826f97aa852.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10052_ingame.983cb22019635500e40ab9aabe11fa0e4c9050c3.png"
							},
							illustrator: "Lius Lasahido",
							rarity: "Common",
							is_red: !0,
							item_def: 110052,
							attack: 6,
							armor: 3,
							hit_points: 6,
							references: [{
									card_id: 10179,
									ref_type: "includes",
									count: 3
								}
							]
						}, {
							card_id: 10053,
							base_card_id: 10053,
							card_type: "Hero",
							card_name: {
								english: "Prellex"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10053.46d6ca300f26d8e05aaf9d63c590508a723415b5.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10053_large_english.52384ff51fe248283a27073d310f4c234b8d697e.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10053_ingame.8089df7555c623afc0e20e7873d62f0a8d5c3f66.png"
							},
							illustrator: "Lius Lasahido",
							rarity: "Uncommon",
							is_blue: !0,
							item_def: 110053,
							attack: 3,
							hit_points: 5,
							references: [{
									card_id: 10147,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10523,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10523,
							base_card_id: 10523,
							card_type: "Passive Ability",
							card_name: {
								english: "Bringer of the Faithful"
							},
							card_text: {
								english: "Summon a <span style='font-weight:bold;color:#ffffff;'>Melee Creep</span> into Prellex's lane each deployment phase."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: [{
									card_id: 1006,
									ref_type: "references"
								}
							]
						}, {
							card_id: 10054,
							base_card_id: 10054,
							card_type: "Hero",
							card_name: {
								english: "Sven"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10054.f7ec19918c68fa805f4577fd31457b5a8a7da2e5.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10054_large_english.dd9923976a0b95509983d2e8507de54677d57bbb.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10054_ingame.28b35264859897d83c4ff6c4ceac138f194706c9.png"
							},
							illustrator: "Yongjae Choi",
							rarity: "Common",
							is_red: !0,
							item_def: 110054,
							attack: 5,
							hit_points: 11,
							references: [{
									card_id: 10330,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10513,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10513,
							base_card_id: 10513,
							card_type: "Passive Ability",
							card_name: {
								english: "Great Cleave"
							},
							card_text: {
								english: "Sven has +X Cleave where X is equal to half its Attack."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10056,
							base_card_id: 10056,
							card_type: "Hero",
							card_name: {
								english: "Treant Protector"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10056.4ea3388b448c9ee13bbbfd7248b46f0c3e71e98a.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10056_large_english.378572f8b6db03aa128a86f17563787e092a7d91.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10056_ingame.22ad237a7bc3ac7c093590392823d8c6241ac30d.png"
							},
							illustrator: "Alix Branwyn",
							rarity: "Common",
							is_green: !0,
							item_def: 110056,
							attack: 4,
							hit_points: 10,
							references: [{
									card_id: 10117,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10514,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10514,
							base_card_id: 10514,
							card_type: "Passive Ability",
							card_name: {
								english: "Branches of Iron"
							},
							card_text: {
								english: "Treant Protector's allied neighbors have +2 Armor."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10058,
							base_card_id: 10058,
							card_type: "Hero",
							card_name: {
								english: "Sorla Khan"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10058.635583094b11fcc0f86d624e9007f4a519179f38.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10058_large_english.ae572f9916a6d2a5ac188a53c6a8974fbd060ea2.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10058_ingame.f40b33ccbbbb5749e3a418c9b9c20db908fe4472.png"
							},
							illustrator: "Tyler Jacobson",
							rarity: "Uncommon",
							is_black: !0,
							item_def: 110058,
							attack: 8,
							hit_points: 6,
							references: [{
									card_id: 10177,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10516,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10516,
							base_card_id: 10516,
							card_type: "Passive Ability",
							card_name: {
								english: "Warmonger"
							},
							card_text: {
								english: "Sorla Khan deals +4 damage when attacking a tower."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10059,
							base_card_id: 10059,
							card_type: "Hero",
							card_name: {
								english: "Necrophos"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10059.66aae3f23e16000eb90086810be1d750ec6babe0.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10059_large_english.7b63ac17c11e3ca9f73f5c53048fceb56ac66665.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10059_ingame.3b8bbf6012bb0d2000f4f8fac91c8d2ac56a169a.png"
							},
							illustrator: "Kieran Yanner",
							rarity: "Common",
							is_black: !0,
							item_def: 110059,
							attack: 5,
							hit_points: 6,
							references: [{
									card_id: 10274,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10517,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10517,
							base_card_id: 10517,
							card_type: "Passive Ability",
							card_name: {
								english: "Sadist"
							},
							card_text: {
								english: "Modify Necrophos with +1 Health after an enemy neighbor dies."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10060,
							base_card_id: 10060,
							card_type: "Hero",
							card_name: {
								english: "Lion"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 4:</span> Deal 8 piercing damage to a unit."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10060.1b8ab00d3d43fa0aec13c1d4f078c510c2828eed.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10060_large_english.e26714271452bae102d90b2d92dd14978af3c992.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10060_ingame.3cc7cccf0863e3326fdb57fadc4be375ee9c5415.png"
							},
							illustrator: "Stepan Alekseev",
							rarity: "Common",
							is_black: !0,
							item_def: 110060,
							attack: 6,
							hit_points: 5,
							references: [{
									card_id: 10275,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10449,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10449,
							base_card_id: 10449,
							card_type: "Ability",
							card_name: {
								english: "Finger of Death"
							},
							card_text: {
								english: "Deal 8 piercing damage to a unit."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10062,
							base_card_id: 10062,
							card_type: "Hero",
							card_name: {
								english: "Skywrath Mage"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 2:</span> Give a hero and its allied neighbors -2 Armor this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10062.320871aec38db2b973d6fa8933e62d3f44e8e407.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10062_large_english.cf95686247d6ef72f27a37a2420575846c150923.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10062_ingame.9890e2113b5e86406485a425ecfc1d81f7b1be3c.png"
							},
							illustrator: "Greg Opalinski",
							rarity: "Common",
							is_blue: !0,
							item_def: 110062,
							attack: 3,
							hit_points: 6,
							references: [{
									card_id: 10063,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10451,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10451,
							base_card_id: 10451,
							card_type: "Ability",
							card_name: {
								english: "Concussive Shot"
							},
							card_text: {
								english: "Give a hero and its allied neighbors -2 Armor this round."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10063,
							base_card_id: 10063,
							card_type: "Spell",
							card_name: {
								english: "Mystic Flare"
							},
							card_text: {
								english: "Deal 12 damage evenly divided among a unit and its allied neighbors."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10063.151e14066698af6f78a6a23fa01ddf88c325fe6a.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10063_large_english.6faaf719fc430089487d532174ce0ad77baf212f.png"
							},
							ingame_image: {},
							illustrator: "Greg Opalinski",
							is_blue: !0,
							mana_cost: 6,
							references: []
						}, {
							card_id: 10064,
							base_card_id: 10064,
							card_type: "Hero",
							card_name: {
								english: "Crystal Maiden"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10064.e76bb6f2b597ae16bc8a5efa82eca5ff39afaa29.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10064_large_english.7ce66f35002c0f8aeba8beef3f6ddd1d76c41da1.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10064_ingame.2ec56e566f1a8f6a6b800f1613f10515b4fd7d17.png"
							},
							illustrator: "Stepan Alekseev",
							rarity: "Common",
							is_blue: !0,
							item_def: 110064,
							attack: 2,
							hit_points: 5,
							references: [{
									card_id: 10277,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10518,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10518,
							base_card_id: 10518,
							card_type: "Passive Ability",
							card_name: {
								english: "Arcane Aura"
							},
							card_text: {
								english: "After the first time an allied spell is played in each lane, restore 2 Mana to the tower in that lane."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10519,
							base_card_id: 10519,
							card_type: "Passive Ability",
							card_name: {
								english: "Static Field"
							},
							card_text: {
								english: "Deal 1 piercing damage to Zeus's enemy neighbors after you play a <span style='font-weight:bold;color:#2f7492;'>blue spell</span>."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10065,
							base_card_id: 10065,
							card_type: "Hero",
							card_name: {
								english: "Zeus"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10065.de19a6f1e68cfcab2f38f25b3d8847866ba87ccb.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10065_large_english.867cb055b1aa49b06c094d94d6d08073563fac1f.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10065_ingame.66b980fa18c866fcfb5d704423f1a27e24822e3c.png"
							},
							illustrator: "David Palumbo",
							rarity: "Common",
							is_blue: !0,
							item_def: 110065,
							attack: 3,
							hit_points: 7,
							references: [{
									card_id: 10278,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10519,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10067,
							base_card_id: 10067,
							card_type: "Hero",
							card_name: {
								english: "Magnus"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10067.9130bf7958f290e69cf5bcc960332d44830919ae.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10067_large_english.96fa75ded15cea84122c15c87915fbdd95b1c3b2.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10067_ingame.9b4157f13dfd086f9cb1e2357985ccc384578119.png"
							},
							illustrator: "Magali Villeneuve",
							rarity: "Common",
							is_green: !0,
							item_def: 110067,
							attack: 4,
							armor: 1,
							hit_points: 9,
							references: [{
									card_id: 10280,
									ref_type: "includes",
									count: 3
								}
							]
						}, {
							card_id: 10068,
							base_card_id: 10068,
							card_type: "Hero",
							card_name: {
								english: "Dark Seer"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 2:</span> Move another ally to another lane."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10068.e8e173ac8dd4f1d582fe41378232b4c3637ab039.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10068_large_english.906eeef2a0b7bce1d2d4a5f36dd752d8cd1ac132.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10068_ingame.d551de559af77e7376f663a900d27f99b7616d6c.png"
							},
							illustrator: "Stepan Alekseev",
							rarity: "Common",
							is_green: !0,
							item_def: 110068,
							attack: 5,
							hit_points: 9,
							references: [{
									card_id: 10281,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10452,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10452,
							base_card_id: 10452,
							card_type: "Ability",
							card_name: {
								english: "Surge"
							},
							card_text: {
								english: "Move another ally to another lane."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10069,
							base_card_id: 10069,
							card_type: "Hero",
							card_name: {
								english: "Legion Commander"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10069.f0595417e162f98c02cd6ce7b3a45b5413f6639f.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10069_large_english.9279d43f69539edb79347afb7a15e1341d073c0b.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10069_ingame.659a7475aaa6e1cbeb8c7d86ab74d1e740a91a11.png"
							},
							illustrator: "Randy Vargas",
							rarity: "Uncommon",
							is_red: !0,
							item_def: 110069,
							attack: 6,
							armor: 1,
							hit_points: 8,
							references: [{
									card_id: 10341,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10520,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10520,
							base_card_id: 10520,
							card_type: "Passive Ability",
							card_name: {
								english: "Moment of Courage"
							},
							card_text: {
								english: "Legion Commander has +2 Retaliate."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10070,
							base_card_id: 10070,
							card_type: "Hero",
							card_name: {
								english: "Ursa"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10070.0fb457ff9ef3010b7f2743789889339aa74b4152.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10070_large_english.6450baac5129154049d8fb41251c4a00cb6836c8.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10070_ingame.42164bc5c798b36a6ddc65e2ad113e96486c4f3d.png"
							},
							illustrator: "Forrest Imel",
							rarity: "Common",
							is_red: !0,
							item_def: 110070,
							attack: 7,
							hit_points: 10,
							references: [{
									card_id: 10282,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10521,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10521,
							base_card_id: 10521,
							card_type: "Passive Ability",
							card_name: {
								english: "Fury Swipes"
							},
							card_text: {
								english: "When Ursa deals battle damage to a unit, modify that unit with -1 Armor."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10076,
							base_card_id: 10076,
							card_type: "Creep",
							card_name: {
								english: "Smeevil Armsmaster"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Play Effect:</span>  Modify a random allied hero with +2 Attack."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10076.a86d96da771fc88bfec128071a1209125acadfaf.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10076_large_english.8dbef08251884c574ae3972207bc00c6334ec33c.png"
							},
							ingame_image: {},
							illustrator: "Mike Azevedo",
							rarity: "Uncommon",
							is_red: !0,
							mana_cost: 4,
							item_def: 110076,
							attack: 2,
							hit_points: 2,
							references: []
						}, {
							card_id: 10077,
							base_card_id: 10077,
							card_type: "Creep",
							card_name: {
								english: "Sister of the Veil"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 1:</span> Choose a combat target for Sister of the Veil."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10077.7451246292f34e03091b67466babbc7f0947bbf1.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10077_large_english.666450d23ae26113d5201558e2d226fb885a9965.png"
							},
							ingame_image: {},
							illustrator: "Anthony Palumbo",
							rarity: "Uncommon",
							is_black: !0,
							mana_cost: 5,
							item_def: 110077,
							attack: 4,
							hit_points: 5,
							references: [{
									card_id: 10454,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10454,
							base_card_id: 10454,
							card_type: "Ability",
							card_name: {
								english: "Sister of the Veil"
							},
							card_text: {
								english: "Choose a combat target for Sister of the Veil."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10078,
							base_card_id: 10078,
							card_type: "Creep",
							card_name: {
								english: "Tyler Estate Censor"
							},
							card_text: {
								english: "The enemy tower has -1 Mana."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10078.adb17a86187b3e8907ae01f37399b74919c23c35.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10078_large_english.41981669395094ccc3f4dcb72eb326d85d0acfb2.png"
							},
							ingame_image: {},
							illustrator: "James Paick",
							rarity: "Uncommon",
							is_black: !0,
							mana_cost: 4,
							item_def: 110078,
							attack: 2,
							hit_points: 8,
							references: []
						}, {
							card_id: 10079,
							base_card_id: 10079,
							card_type: "Creep",
							card_name: {
								english: "Smeevil Blacksmith"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Play Effect:</span>  Modify a random allied hero with +1 Armor."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10079.0353e0aaf9b574b3456e63b8d5cfaede0f67580d.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10079_large_english.6c2ec4cf57333fc0c3ca690f031d9caca0e9e56a.png"
							},
							ingame_image: {},
							illustrator: "Izzy",
							rarity: "Uncommon",
							is_green: !0,
							mana_cost: 4,
							item_def: 110079,
							attack: 2,
							hit_points: 2,
							references: []
						}, {
							card_id: 10080,
							base_card_id: 10080,
							card_type: "Creep",
							card_name: {
								english: "Rebel Decoy"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 1:</span> Swap Rebel Decoy with another ally."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10080.45f68a0e2677040d8eeac43771df4006fe4790fe.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10080_large_english.5fb38fea995222c9ffd5160d4601eb22ec8a63ca.png"
							},
							ingame_image: {},
							illustrator: "Jason Kang",
							rarity: "Common",
							is_green: !0,
							mana_cost: 3,
							item_def: 110080,
							attack: 2,
							hit_points: 3,
							references: [{
									card_id: 10455,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10455,
							base_card_id: 10455,
							card_type: "Ability",
							card_name: {
								english: "Rebel Decoy"
							},
							card_text: {
								english: "Swap Rebel Decoy with another ally."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10082,
							base_card_id: 10082,
							card_type: "Creep",
							card_name: {
								english: "Centaur Hunter"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10082.222d55d60939ad4c2bb8dad54e6220b00c92cf33.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10082_large_english.95ab1c01ca081ae12fc8c631c783945c6a819da1.png"
							},
							ingame_image: {},
							illustrator: "James Paick",
							is_red: !0,
							mana_cost: 5,
							attack: 4,
							hit_points: 8,
							references: []
						}, {
							card_id: 10083,
							base_card_id: 10083,
							card_type: "Creep",
							card_name: {
								english: "Pit Fighter of Quoidge"
							},
							card_text: {
								english: "Modify Pit Fighter of Quoidge with +2 Attack after an allied neighbor dies."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10083.8a7652f25a09f456967ddf48eebe39edf7f03175.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10083_large_english.03ddff77f0475b2b3e8751005f77e3e302b74caf.png"
							},
							ingame_image: {},
							illustrator: "Daarken",
							rarity: "Rare",
							is_black: !0,
							mana_cost: 4,
							item_def: 110083,
							attack: 2,
							hit_points: 8,
							references: []
						}, {
							card_id: 10084,
							base_card_id: 10084,
							card_type: "Creep",
							card_name: {
								english: "Rebel Instigator"
							},
							card_text: {
								english: "After the combat phase, if Rebel Instigator dealt battle damage to a creep this round, summon a <span style='font-weight:bold;color:#ffffff;'>Rebel Instigator</span>."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10084.af79046d024a3109a96e670661395acd9e767211.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10084_large_english.71d45f8bac5d43e71111446af581296cca3987e2.png"
							},
							ingame_image: {},
							illustrator: "Forrest Imel",
							rarity: "Uncommon",
							is_red: !0,
							mana_cost: 4,
							item_def: 110084,
							attack: 2,
							hit_points: 3,
							references: []
						}, {
							card_id: 10085,
							base_card_id: 10085,
							card_type: "Creep",
							card_name: {
								english: "Assassin's Shadow"
							},
							card_text: {
								english: "Siege 5. Assassin's Shadow has -2 Attack for each ally."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10085.f09a15f66768b837fafb28f60b72769173c22add.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10085_large_english.4e3bf654d7c2e22390caa7d587eb2f8707c60523.png"
							},
							ingame_image: {},
							illustrator: "Daniel Romanovsky",
							rarity: "Rare",
							is_black: !0,
							mana_cost: 7,
							item_def: 110085,
							attack: 15,
							hit_points: 5,
							references: []
						}, {
							card_id: 10086,
							base_card_id: 10086,
							card_type: "Creep",
							card_name: {
								english: "Disciple of Nevermore"
							},
							card_text: {
								english: "Other allies have +2 Attack and -2 Armor."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10086.4fde2e719dbdad72806d9ac0e3b91fecb0c03eb9.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10086_large_english.15b757f1a202ad4a95764f0b91d4a68203db815f.png"
							},
							ingame_image: {},
							illustrator: "Lius Lasahido",
							rarity: "Common",
							is_black: !0,
							mana_cost: 3,
							item_def: 110086,
							attack: 4,
							armor: 254,
							hit_points: 4,
							references: []
						}, {
							card_id: 10087,
							base_card_id: 10087,
							card_type: "Creep",
							card_name: {
								english: "Legion Standard Bearer"
							},
							card_text: {
								english: "Legion Standard Bearer's allied neighbors have +4 Attack."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10087.955aef063a2a4591748bf4c5de8561e20f1660bf.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10087_large_english.337bc12249773b72f99036b4764e0f5cba0e97a3.png"
							},
							ingame_image: {},
							illustrator: "Wisnu Tan",
							rarity: "Uncommon",
							is_red: !0,
							mana_cost: 4,
							item_def: 110087,
							hit_points: 6,
							references: []
						}, {
							card_id: 10090,
							base_card_id: 10090,
							card_type: "Creep",
							card_name: {
								english: "Relentless Zombie"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Play Effect:</span>  Give Relentless Zombie a Death Shield."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10090.42e284f16be88c517eaac9f2c823d363d5ea899a.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10090_large_english.1bfb3e7da9780d402e1397fca4f286f2231cdd9c.png"
							},
							ingame_image: {},
							illustrator: "Lars Grant-West",
							rarity: "Common",
							is_blue: !0,
							mana_cost: 2,
							item_def: 110090,
							attack: 2,
							hit_points: 2,
							references: []
						}, {
							card_id: 10091,
							base_card_id: 10091,
							card_type: "Creep",
							card_name: {
								english: "Revtel Convoy"
							},
							card_text: {
								english: "Revtel Convoy has +X Attack where X is equal to half your gold."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10091.4f031e4b2abec7e0baeb8e64aa11fee139527a59.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10091_large_english.ef99a4d93c8461f4fa563dbfc3754a29b4b2da23.png"
							},
							ingame_image: {},
							illustrator: "Darek Zabrocki",
							rarity: "Rare",
							is_green: !0,
							mana_cost: 5,
							item_def: 110091,
							hit_points: 20,
							references: []
						}, {
							card_id: 10092,
							base_card_id: 10092,
							card_type: "Creep",
							card_name: {
								english: "Oglodi Vandal"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Play Effect:</span>  Deal 4 damage to the enemy tower."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10092.8c1d0f80d2a8a666a2f882f0a50379d547d9ae29.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10092_large_english.578a5acb2744a7997b2d181fa3e19687c452ef37.png"
							},
							ingame_image: {},
							illustrator: "JiHun Lee",
							rarity: "Common",
							is_black: !0,
							mana_cost: 4,
							item_def: 110092,
							attack: 4,
							hit_points: 4,
							references: []
						}, {
							card_id: 10093,
							base_card_id: 10093,
							card_type: "Creep",
							card_name: {
								english: "Hound of War"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10093.7c619d4eed89bc0c220d3a455a1a482e67a4e5e5.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10093_large_english.0669b348fc6e908f35a162e6489c6305de00d7c6.png"
							},
							ingame_image: {},
							illustrator: "Lake Hurwitz",
							is_black: !0,
							mana_cost: 3,
							attack: 2,
							hit_points: 1,
							references: []
						}, {
							card_id: 10094,
							base_card_id: 10094,
							card_type: "Creep",
							card_name: {
								english: "Mercenary Exiles"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 2:</span> Spend all your gold. Modify Mercenary Exiles with +X Attack and +X Health where X is half the gold spent."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10094.b1329de0d8604df994bdf12fd1c1b4db65e0535e.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10094_large_english.8eb8986ab1034f627e6f752dfcf68af200d610e4.png"
							},
							ingame_image: {},
							illustrator: "John Stanko",
							rarity: "Rare",
							is_red: !0,
							mana_cost: 3,
							item_def: 110094,
							attack: 2,
							armor: 1,
							hit_points: 4,
							references: [{
									card_id: 10456,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10456,
							base_card_id: 10456,
							card_type: "Ability",
							card_name: {
								english: "Mercenary Exiles"
							},
							card_text: {
								english: "Spend all your gold. Modify Mercenary Exiles with +X Attack and +X Health where X is half the gold spent."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10095,
							base_card_id: 10095,
							card_type: "Creep",
							card_name: {
								english: "Keenfolk Golem"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Play Effect:</span>  Discard your hand."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10095.58b35411a7a53f43b6f60471f10be93e89708b83.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10095_large_english.3d317a403df3036f0d71241a6a701a92b918d7df.png"
							},
							ingame_image: {},
							illustrator: "Wisnu Tan",
							rarity: "Rare",
							is_red: !0,
							mana_cost: 6,
							item_def: 110095,
							attack: 13,
							hit_points: 13,
							references: []
						}, {
							card_id: 10096,
							base_card_id: 10096,
							card_type: "Creep",
							card_name: {
								english: "Emissary of the Quorum"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 1:</span> Modify allies with +2 Attack and +2 Health."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10096.cc30832b644f3814ee1ad83985c9c631d9d93836.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10096_large_english.98aff072214d8afe188350b0a7ecb3d5d9a5dd32.png"
							},
							ingame_image: {},
							illustrator: "Kieran Yanner",
							rarity: "Rare",
							is_green: !0,
							mana_cost: 8,
							item_def: 110096,
							attack: 1,
							armor: 2,
							hit_points: 10,
							references: [{
									card_id: 10457,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10457,
							base_card_id: 10457,
							card_type: "Ability",
							card_name: {
								english: "Emissary of the Quorum"
							},
							card_text: {
								english: "Modify allies with +2 Attack and +2 Health."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10097,
							base_card_id: 10097,
							card_type: "Creep",
							card_name: {
								english: "Marrowfell Brawler"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10097.0fbb18ea6b9af005a6877b2155e2864eb650af1f.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10097_large_english.5fc951a6ae1ed4670eefc099a7da4b9bd76e2120.png"
							},
							ingame_image: {},
							illustrator: "Vance Kovacs",
							rarity: "Rare",
							is_red: !0,
							mana_cost: 6,
							item_def: 110097,
							attack: 6,
							hit_points: 16,
							references: []
						}, {
							card_id: 10102,
							base_card_id: 10102,
							card_type: "Creep",
							card_name: {
								english: "Thunderhide Pack"
							},
							card_text: {
								english: "Siege 6."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10102.82f2f65f664181ca761751979cc46d385211ec92.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10102_large_english.bbdc31f2449bb0819902c717eb02f47435bd8974.png"
							},
							ingame_image: {},
							illustrator: "Lars Grant-West",
							rarity: "Common",
							is_green: !0,
							mana_cost: 8,
							item_def: 110102,
							attack: 14,
							hit_points: 14,
							references: []
						}, {
							card_id: 10103,
							base_card_id: 10103,
							card_type: "Creep",
							card_name: {
								english: "Ogre Corpse Tosser"
							},
							card_text: {
								english: "Deal 2 piercing damage to the enemy tower after an allied <span style='font-weight:bold;color:#ffffff;'>Melee Creep</span> dies."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10103.186f93a8d665b55ec5e908e9b7a5d694ed61473e.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10103_large_english.e5924d1cd2cc5626791be65c38fb83b7ffcc514c.png"
							},
							ingame_image: {},
							illustrator: "Bayard Wu",
							rarity: "Rare",
							is_red: !0,
							mana_cost: 5,
							item_def: 110103,
							attack: 2,
							hit_points: 10,
							references: [{
									card_id: 1006,
									ref_type: "references"
								}
							]
						}, {
							card_id: 10104,
							base_card_id: 10104,
							card_type: "Creep",
							card_name: {
								english: "Bronze Legionnaire"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10104.834d68cad9ae1f9a4b3a342817ace09f5882e257.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10104_large_english.55860f31ddcc1d4d1783ebeb712f732612397e9c.png"
							},
							ingame_image: {},
							illustrator: "Stepan Alekseev",
							rarity: "Common",
							is_red: !0,
							mana_cost: 2,
							item_def: 110104,
							attack: 4,
							armor: 2,
							hit_points: 2,
							references: []
						}, {
							card_id: 10106,
							base_card_id: 10106,
							card_type: "Creep",
							card_name: {
								english: "Incarnation of Selemene"
							},
							card_text: {
								english: "Fully restore your tower's Mana after you play any card."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10106.c5ab80f62e1075f918b5d49d9ed5a71940b7de66.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10106_large_english.4c34e2e3814e9f8040b3fcd99ae8fad218bacf0a.png"
							},
							ingame_image: {},
							illustrator: "Anthony Palumbo",
							rarity: "Rare",
							is_blue: !0,
							mana_cost: 9,
							item_def: 110106,
							attack: 3,
							hit_points: 11,
							references: []
						}, {
							card_id: 10107,
							base_card_id: 10107,
							card_type: "Creep",
							card_name: {
								english: "Vhoul Martyr"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Death Effect:</span>  Modify allies with +1 Attack and +1 Health."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10107.dc63e26ca00e4b29b6a5bb9bc5a28c565e675779.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10107_large_english.1a9fd5d2bb6958b9f2c57a1cd6df503cf95273df.png"
							},
							ingame_image: {},
							illustrator: "Jakub Kasper",
							rarity: "Common",
							is_green: !0,
							mana_cost: 2,
							item_def: 110107,
							attack: 2,
							hit_points: 2,
							references: []
						}, {
							card_id: 10108,
							base_card_id: 10108,
							card_type: "Creep",
							card_name: {
								english: "Thunderhide Alpha"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10108.6cd0b952c8ebbc1721906d0e0bf90621183b579d.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10108_large_english.c33d62328f5bbb66499d1014e942d63c11aeaed5.png"
							},
							ingame_image: {},
							illustrator: "Vance Kovacs",
							rarity: "Rare",
							is_green: !0,
							mana_cost: 9,
							item_def: 110108,
							attack: 25,
							hit_points: 25,
							references: []
						}, {
							card_id: 10111,
							base_card_id: 10111,
							card_type: "Creep",
							card_name: {
								english: "Satyr Duelist"
							},
							card_text: {
								english: "Modify Satyr Duelist with +2 Attack after the combat phase."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10111.c4cbe25b01123928f52af27718bef137fdd433f9.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10111_large_english.7782de55b6b852b72e84cbc47547d1e5d3770c1e.png"
							},
							ingame_image: {},
							rarity: "Common",
							is_green: !0,
							mana_cost: 4,
							item_def: 110111,
							attack: 3,
							hit_points: 5,
							references: []
						}, {
							card_id: 10112,
							base_card_id: 10112,
							card_type: "Creep",
							card_name: {
								english: "Savage Wolf"
							},
							card_text: {
								english: "Modify Savage Wolf with +1 Attack and +2 Health after the combat phase."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10112.a9c0aa6b1432b8056ba722c0f7fe2838cabcf607.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10112_large_english.6bce93116b116067c30e56bcc75e4833786b41dc.png"
							},
							ingame_image: {},
							illustrator: "Ryan Pancoast",
							is_green: !0,
							mana_cost: 4,
							attack: 3,
							hit_points: 3,
							references: []
						}, {
							card_id: 10113,
							base_card_id: 10113,
							card_type: "Creep",
							card_name: {
								english: "Rampaging Hellbear"
							},
							card_text: {
								english: "Modify Rampaging Hellbear with +4 Attack after the combat phase."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10113.f810e4777d6da93e40c89090545055c94f65c3c1.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10113_large_english.89af6707422882d9a6ed1bffbcd178e6f7e90764.png"
							},
							ingame_image: {},
							illustrator: "Vance Kovacs",
							rarity: "Rare",
							is_green: !0,
							mana_cost: 4,
							item_def: 110113,
							attack: 2,
							hit_points: 3,
							references: []
						}, {
							card_id: 10114,
							base_card_id: 10114,
							card_type: "Creep",
							card_name: {
								english: "Cursed Satyr"
							},
							card_text: {
								english: "Summon a <span style='font-weight:bold;color:#ffffff;'>Zombie</span> for your opponent after the combat phase."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10114.530ef12971662949b70ea6bc1d522abad791bff5.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10114_large_english.eb45e6cec07aedc7a712be6fa23765a603708307.png"
							},
							ingame_image: {},
							illustrator: "Jakub Kasper",
							rarity: "Uncommon",
							is_red: !0,
							mana_cost: 5,
							item_def: 110114,
							attack: 6,
							hit_points: 6,
							references: [{
									card_id: 1009,
									ref_type: "references"
								}
							]
						}, {
							card_id: 10115,
							base_card_id: 10115,
							card_type: "Creep",
							card_name: {
								english: "Ravenhook"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 1:</span> Condemn a random item equipped by the unit blocking Ravenhook. Get gold equal to the base cost of that item."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10115.2ba848eb157dd21e6c9096e5cc5ff0dbf027556f.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10115_large_english.354ec0232b98b68fca6528c1b2b16a9b988bf547.png"
							},
							ingame_image: {},
							illustrator: "Heonhwa Choe",
							rarity: "Rare",
							is_black: !0,
							mana_cost: 6,
							item_def: 110115,
							attack: 3,
							hit_points: 6,
							references: [{
									card_id: 10524,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10524,
							base_card_id: 10524,
							card_type: "Ability",
							card_name: {
								english: "Ravenhook"
							},
							card_text: {
								english: "Condemn a random item equipped by the unit blocking Ravenhook. Get gold equal to the base cost of that item."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10116,
							base_card_id: 10116,
							card_type: "Creep",
							card_name: {
								english: "Ravenous Mass"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 1:</span> Condemn Ravenous Mass's allied neighbors. Modify Ravenous Mass with their Attack and Health."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10116.fe74a19ec0cab3b4522e517f5eb4957a12cbb2a3.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10116_large_english.69cd3b3051d2cf76e994110c5b7f94170dd4bf04.png"
							},
							ingame_image: {},
							illustrator: "Mike Azevedo",
							rarity: "Rare",
							is_black: !0,
							mana_cost: 4,
							item_def: 110116,
							attack: 1,
							hit_points: 1,
							references: [{
									card_id: 10459,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10459,
							base_card_id: 10459,
							card_type: "Ability",
							card_name: {
								english: "Ravenous Mass"
							},
							card_text: {
								english: "Condemn Ravenous Mass's allied neighbors. Modify Ravenous Mass with their Attack and Health."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10117,
							base_card_id: 10117,
							card_type: "Creep",
							card_name: {
								english: "Nature's Guise"
							},
							card_text: {
								english: "Your tower has +1 Mana."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10117.5eea0573852449f0341e0e38f894977e6b070b73.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10117_large_english.dcafe4b37de14b83cb3ff76a85508a15108b530b.png"
							},
							ingame_image: {},
							illustrator: "Alix Branwyn",
							is_green: !0,
							mana_cost: 4,
							attack: 2,
							hit_points: 6,
							references: []
						}, {
							card_id: 10118,
							base_card_id: 10118,
							card_type: "Creep",
							card_name: {
								english: "Hellbear Crippler"
							},
							card_text: {
								english: "When Hellbear Crippler deals battle damage to a unit, modify that unit with -1 Attack."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10118.06997fa22931c7f4b8fd6c266b33654033a07fd9.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10118_large_english.ea059cc7e267997aabf2e5ee790170fe6395799c.png"
							},
							ingame_image: {},
							illustrator: "Vance Kovacs",
							rarity: "Common",
							is_red: !0,
							mana_cost: 3,
							item_def: 110118,
							attack: 3,
							hit_points: 3,
							references: []
						}, {
							card_id: 10119,
							base_card_id: 10119,
							card_type: "Creep",
							card_name: {
								english: "Selfish Cleric"
							},
							card_text: {
								english: "Fully heal Selfish Cleric after the combat phase."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10119.314b3f4cab73ab3b0835e08f32d1311deb411442.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10119_large_english.93aab7f61bbce0410e28b9677c8b9cb8d7ac2d31.png"
							},
							ingame_image: {},
							illustrator: "John Stanko",
							rarity: "Common",
							is_green: !0,
							mana_cost: 4,
							item_def: 110119,
							attack: 4,
							hit_points: 4,
							references: []
						}, {
							card_id: 10120,
							base_card_id: 10120,
							card_type: "Creep",
							card_name: {
								english: "Roseleaf Wall"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10120.ef052dfc29add765463c92a99ed255b849d18657.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10120_large_english.09122e162f58336786db20eca6463a8349319925.png"
							},
							ingame_image: {},
							illustrator: "Pauline Voss",
							is_green: !0,
							mana_cost: 3,
							hit_points: 8,
							references: []
						}, {
							card_id: 10127,
							base_card_id: 10127,
							card_type: "Creep",
							card_name: {
								english: "Ogre Conscript"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10127.0b2176feded4927be83fb6d9373477eff70198fe.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10127_large_english.c14b92dfbb8f4cafc7ff6eca637c7e5113f24a04.png"
							},
							ingame_image: {},
							illustrator: "Lius Lasahido",
							rarity: "Common",
							is_red: !0,
							mana_cost: 6,
							item_def: 110127,
							attack: 7,
							armor: 2,
							hit_points: 7,
							references: []
						}, {
							card_id: 10128,
							base_card_id: 10128,
							card_type: "Creep",
							card_name: {
								english: "Untested Grunt"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10128.fcbdb64d383d35d026fe3bb64c29ee995039aeb3.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10128_large_english.bf98505f40dfc832298053e2e74d979459cce0e9.png"
							},
							ingame_image: {},
							illustrator: "Jason Kang",
							rarity: "Common",
							is_black: !0,
							mana_cost: 2,
							item_def: 110128,
							attack: 4,
							hit_points: 2,
							references: []
						}, {
							card_id: 10129,
							base_card_id: 10129,
							card_type: "Creep",
							card_name: {
								english: "Assassin's Apprentice"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 1:</span> Choose a combat target for Assassin's Apprentice."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10129.d985ab71ce9cf0c3a02d7f501e4cbfdcb9df5af7.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10129_large_english.33190072c68535b08588c0614a396759b5af91da.png"
							},
							ingame_image: {},
							illustrator: "David Palumbo",
							rarity: "Common",
							is_black: !0,
							mana_cost: 2,
							item_def: 110129,
							attack: 3,
							hit_points: 2,
							references: [{
									card_id: 10543,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10543,
							base_card_id: 10543,
							card_type: "Ability",
							card_name: {
								english: "Assassin's Apprentice"
							},
							card_text: {
								english: "Choose a combat target for Assassin's Apprentice."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10131,
							base_card_id: 10131,
							card_type: "Creep",
							card_name: {
								english: "Stonehall Elite"
							},
							card_text: {
								english: "Modify Stonehall Elite with +2 Attack and +2 Health after a unit blocking it dies."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10131.b5451ce8ec5535c1241278b6696c9d440780ef61.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10131_large_english.1b30c6c1973c30b6e3f4518e29b420d7cc8dfdb5.png"
							},
							ingame_image: {},
							illustrator: "Jason Kang",
							rarity: "Uncommon",
							is_red: !0,
							mana_cost: 4,
							item_def: 110131,
							attack: 4,
							armor: 2,
							hit_points: 2,
							references: []
						}, {
							card_id: 10132,
							base_card_id: 10132,
							card_type: "Creep",
							card_name: {
								english: "Red Mist Pillager"
							},
							card_text: {
								english: "After the combat phase, if Red Mist Pillager dealt battle damage to a tower this round, summon a <span style='font-weight:bold;color:#ffffff;'>Red Mist Pillager</span>."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10132.9dc636e0a6e2a15098e8f8f14e55e64b0ccc5d06.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10132_large_english.fdb0f6945dac95d0d013a5bc3cd5bf5c94d6889f.png"
							},
							ingame_image: {},
							illustrator: "Anastasia Ovchinnikova",
							rarity: "Uncommon",
							is_red: !0,
							mana_cost: 5,
							item_def: 110132,
							attack: 4,
							hit_points: 2,
							references: []
						}, {
							card_id: 10133,
							base_card_id: 10133,
							card_type: "Creep",
							card_name: {
								english: "Champion of the Ancient"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Play Effect:</span>  Modify Champion of the Ancient with +1 Attack, +1 Health, and +1 Cleave for each enemy."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10133.149d8c1fd2e23796a222652a806be8f06a40c5db.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10133_large_english.961061391afa86454142a3c9743b9029aea2ea14.png"
							},
							ingame_image: {},
							illustrator: "Daarken",
							rarity: "Rare",
							is_green: !0,
							mana_cost: 7,
							item_def: 110133,
							attack: 2,
							hit_points: 6,
							references: []
						}, {
							card_id: 10134,
							base_card_id: 10134,
							card_type: "Creep",
							card_name: {
								english: "Roseleaf Rejuvenator"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Play Effect:</span>  Heal your tower 7."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10134.df2c1af4f93727a3e800619355772762cbdf4670.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10134_large_english.4afa7ae3d8375f8db81a1837e657633fb77252ff.png"
							},
							ingame_image: {},
							illustrator: "Jakub Kasper",
							rarity: "Uncommon",
							is_green: !0,
							mana_cost: 7,
							item_def: 110134,
							attack: 7,
							hit_points: 7,
							references: []
						}, {
							card_id: 10136,
							base_card_id: 10136,
							card_type: "Creep",
							card_name: {
								english: "Loyal Beast"
							},
							card_text: {
								english: "When Loyal Beast deals battle damage to a unit, modify that unit with -1 Attack."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10136.b5edbdda5ac2020d3f67b914662dae9fc4aad0f6.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10136_large_english.3512098ad97405cb96548bc77190a2360255e7fa.png"
							},
							ingame_image: {},
							illustrator: "Clint Cearley",
							is_red: !0,
							mana_cost: 3,
							attack: 3,
							armor: 1,
							hit_points: 3,
							references: []
						}, {
							card_id: 10137,
							base_card_id: 10137,
							card_type: "Creep",
							card_name: {
								english: "Satyr Magician"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 1:</span> Fully restore your tower's Mana."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10137.9f8ab4909042ac588a9a8cd873c0803044ce68e4.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10137_large_english.555c99d98639a8eef801c36a8b8700cf89b71e11.png"
							},
							ingame_image: {},
							illustrator: "Alix Branwyn",
							rarity: "Uncommon",
							is_blue: !0,
							mana_cost: 5,
							item_def: 110137,
							attack: 2,
							hit_points: 5,
							references: [{
									card_id: 10542,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10138,
							base_card_id: 10138,
							card_type: "Creep",
							card_name: {
								english: "Troll Soothsayer"
							},
							card_text: {
								english: "Draw an extra card each round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10138.ea9ae00f45e48b03bc04324cdb77d6aa075481e7.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10138_large_english.557f4b3479894bcdc1fbee3c9d001a9eda850152.png"
							},
							ingame_image: {},
							illustrator: "Sam Carr",
							rarity: "Uncommon",
							is_blue: !0,
							mana_cost: 6,
							item_def: 110138,
							attack: 2,
							hit_points: 8,
							references: []
						}, {
							card_id: 10141,
							base_card_id: 10141,
							card_type: "Improvement",
							card_name: {
								english: "Assured Destruction"
							},
							card_text: {
								english: "All heroes have +4 Siege."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10141.74b79736c4654aff7594dfa1438ec95b7f382a6f.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10141_large_english.292e0febade6bf70d37adb9d89046f3caeea57ef.png"
							},
							ingame_image: {},
							illustrator: "Titus Lunter",
							rarity: "Rare",
							is_black: !0,
							mana_cost: 3,
							item_def: 110141,
							references: []
						}, {
							card_id: 10147,
							base_card_id: 10147,
							card_type: "Improvement",
							card_name: {
								english: "Barracks"
							},
							card_text: {
								english: "Summon a <span style='font-weight:bold;color:#ffffff;'>Melee Creep</span> into this lane each deployment phase."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10147.327049cf33e13c2528a1859d1aca7d2fd74adf07.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10147_large_english.180eac34f0c4f76525cd8df49d63c961f9288b8f.png"
							},
							ingame_image: {},
							illustrator: "Lius Lasahido",
							is_blue: !0,
							mana_cost: 5,
							references: [{
									card_id: 1006,
									ref_type: "references"
								}
							]
						}, {
							card_id: 10148,
							base_card_id: 10148,
							card_type: "Improvement",
							card_name: {
								english: "Fractured Timeline"
							},
							card_text: {
								english: "Before the action phase, give a random card in opponent's hand +1 Lock."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10148.5672c59b99db6c230fa175d7e6b5e762d6185dcf.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10148_large_english.09b68a2d086c5575a9c4505dc4949befe6b9fde3.png"
							},
							ingame_image: {},
							illustrator: "Sam Carr",
							rarity: "Rare",
							is_blue: !0,
							mana_cost: 2,
							item_def: 110148,
							references: []
						}, {
							card_id: 10149,
							base_card_id: 10149,
							card_type: "Improvement",
							card_name: {
								english: "Unearthed Secrets"
							},
							card_text: {
								english: "Draw a card after the combat phase if your tower was dealt damage this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10149.bbf94f94ccb16527e189f082bcedc5cd11850632.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10149_large_english.31710d0ee63571451aea9b5435ac593895cdfa9a.png"
							},
							ingame_image: {},
							illustrator: "David Palumbo",
							rarity: "Rare",
							is_green: !0,
							mana_cost: 3,
							item_def: 110149,
							references: []
						}, {
							card_id: 10150,
							base_card_id: 10150,
							card_type: "Improvement",
							card_name: {
								english: "Path of the Cunning"
							},
							card_text: {
								english: "After you play a <span style='font-weight:bold;color:#736e80;'>black card</span>, modify a random ally with +1 Siege."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10150.aeefba4a2970c07ecae7ceda1605b31a15168861.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10150_large_english.d2cce15eef3d4c6ef8d8b8f2032286dbf211bc36.png"
							},
							ingame_image: {},
							illustrator: "Alayna Danner",
							rarity: "Rare",
							is_black: !0,
							mana_cost: 3,
							item_def: 110150,
							references: []
						}, {
							card_id: 10151,
							base_card_id: 10151,
							card_type: "Improvement",
							card_name: {
								english: "Path of the Wise"
							},
							card_text: {
								english: "After you play a <span style='font-weight:bold;color:#2f7492;'>blue card</span>, deal 1 piercing damage to a random enemy."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10151.2cc1239701efc31137db12cee1f65924331232fa.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10151_large_english.7c1265e3d4f6329d5aa2f0519a2ff425df17a7d4.png"
							},
							ingame_image: {},
							illustrator: "Alayna Danner",
							rarity: "Rare",
							is_blue: !0,
							mana_cost: 3,
							item_def: 110151,
							references: []
						}, {
							card_id: 10152,
							base_card_id: 10152,
							card_type: "Improvement",
							card_name: {
								english: "Path of the Dreamer"
							},
							card_text: {
								english: "After you play a <span style='font-weight:bold;color:#479036;'>green card</span>, give your tower +3 Regeneration until end of round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10152.5e65e0eeeefc61c563628e89ff8bee9913a8d6f0.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10152_large_english.70fbc07d5416bba3f091c7a261f0c1b331745634.png"
							},
							ingame_image: {},
							illustrator: "Alayna Danner",
							rarity: "Rare",
							is_green: !0,
							mana_cost: 3,
							item_def: 110152,
							references: []
						}, {
							card_id: 10153,
							base_card_id: 10153,
							card_type: "Improvement",
							card_name: {
								english: "Path of the Bold"
							},
							card_text: {
								english: "After you play a <span style='font-weight:bold;color:#c2352d;'>strength card</span>, modify a random ally with +1 Attack."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10153.9134dc9491ea616436b46385f74f23760a0c0a02.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10153_large_english.1a63bcd94e3465df821313cc964bf1ac617847df.png"
							},
							ingame_image: {},
							illustrator: "Alayna Danner",
							rarity: "Rare",
							is_red: !0,
							mana_cost: 3,
							item_def: 110153,
							references: []
						}, {
							card_id: 10154,
							base_card_id: 10154,
							card_type: "Improvement",
							card_name: {
								english: "The Tyler Estate"
							},
							card_text: {
								english: "Both towers have -2 Mana."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10154.7b32da3636a800fa11fa654406efabf72fc0691a.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10154_large_english.c721619488c6a53292dfdf76d224b1f5df1587e8.png"
							},
							ingame_image: {},
							illustrator: "Dimitar Marinski",
							rarity: "Uncommon",
							is_black: !0,
							mana_cost: 4,
							item_def: 110154,
							references: []
						}, {
							card_id: 10155,
							base_card_id: 10155,
							card_type: "Improvement",
							card_name: {
								english: "Homefield Advantage"
							},
							card_text: {
								english: "Before the action phase disarm a random enemy this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10155.e35ee486f15a76582a433bf4b8fe1128707485b6.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10155_large_english.4f61c14cc1ebbfefb762f2f2546c02cbd09678f7.png"
							},
							ingame_image: {},
							illustrator: "Jason Kang",
							rarity: "Uncommon",
							is_green: !0,
							mana_cost: 4,
							item_def: 110155,
							references: []
						}, {
							card_id: 10156,
							base_card_id: 10156,
							card_type: "Improvement",
							card_name: {
								english: "Bitter Enemies"
							},
							card_text: {
								english: "After the combat phase, remove a charge from Bitter Enemies. Before the action phase, if there are zero charges on Bitter Enemies, deal 6 damage to both towers."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10156.c3cfea6136ffc347bb0e1c7090f34c34ba7d2272.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10156_large_english.54b0379574f4c0e1dd40cdf284f11dc212d9b13f.png"
							},
							ingame_image: {},
							illustrator: "Lius Lasahido",
							rarity: "Rare",
							is_black: !0,
							mana_cost: 2,
							item_def: 110156,
							references: []
						}, {
							card_id: 10157,
							base_card_id: 10157,
							card_type: "Improvement",
							card_name: {
								english: "Conflagration"
							},
							card_text: {
								english: "Deal 2 damage to each enemy before the action phase."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10157.1d1b25f8f8c06bde880de95e314a126fc12f1ed0.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10157_large_english.d45aa4f5d16dedd5933ea6fc14a899854d2d7f4e.png"
							},
							ingame_image: {},
							illustrator: "Lius Lasahido",
							rarity: "Rare",
							is_blue: !0,
							mana_cost: 5,
							item_def: 110157,
							references: []
						}, {
							card_id: 10160,
							base_card_id: 10160,
							card_type: "Improvement",
							card_name: {
								english: "Ignite"
							},
							card_text: {
								english: "Deal 1 piercing damage to each enemy before the action phase."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10160.eb191e94eba28f9ee0bfb5654730d65cf30161f9.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10160_large_english.2398055d252b3cee3f3c740195225b5eb5b94cc0.png"
							},
							ingame_image: {},
							illustrator: "Randy Vargas",
							is_blue: !0,
							mana_cost: 3,
							references: []
						}, {
							card_id: 10161,
							base_card_id: 10161,
							card_type: "Improvement",
							card_name: {
								english: "Trebuchets"
							},
							card_text: {
								english: "Deal 2 piercing damage to the enemy tower before the action phase."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10161.3faba98804eda9fb4b5ec47c849e42a50488dae7.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10161_large_english.76d14fcba8f4ca22d76db2244bf607b85990ba6e.png"
							},
							ingame_image: {},
							illustrator: "Suzanne Helmigh",
							rarity: "Common",
							is_black: !0,
							mana_cost: 1,
							item_def: 110161,
							references: []
						}, {
							card_id: 10162,
							base_card_id: 10162,
							card_type: "Improvement",
							card_name: {
								english: "Unsupervised Artillery"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 1:</span> Deal 4 piercing damage to the enemy tower. May only be used if there are no unblocked enemies."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10162.288597f89a2633883293ac26b13993572a0584d4.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10162_large_english.fbead4c72a8b170a7c1446555b27a38297705058.png"
							},
							ingame_image: {},
							illustrator: "Forrest Imel",
							rarity: "Uncommon",
							is_black: !0,
							mana_cost: 2,
							item_def: 110162,
							references: [{
									card_id: 10462,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10462,
							base_card_id: 10462,
							card_type: "Ability",
							card_name: {
								english: "Unsupervised Artillery"
							},
							card_text: {
								english: "Deal 4 piercing damage to the enemy tower. May only be used if there are no unblocked enemies."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10164,
							base_card_id: 10164,
							card_type: "Improvement",
							card_name: {
								english: "Revtel Investments"
							},
							card_text: {
								english: "Add a charge to Revtel Investments after the combat phase.<BR>\n<BR>\n<span style='font-weight:bold;color:#ffffff;'>Active 1:</span> Get 4 gold for each charge. Condemn Revtel Investments."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10164.6167f3647ec77bb58f7f33813b976dbb4603d49e.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10164_large_english.abf8bcc9c23acd8f5d8a043243994825adb871d3.png"
							},
							ingame_image: {},
							illustrator: "Jason Kang",
							rarity: "Rare",
							is_black: !0,
							mana_cost: 3,
							item_def: 110164,
							references: [{
									card_id: 10463,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10463,
							base_card_id: 10463,
							card_type: "Ability",
							card_name: {
								english: "Revtel Investments"
							},
							card_text: {
								english: "Get 4 gold for each charge. Condemn Revtel Investments."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10165,
							base_card_id: 10165,
							card_type: "Improvement",
							card_name: {
								english: "Iron Fog Goldmine"
							},
							card_text: {
								english: "Get 3 gold after the combat phase."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10165.26c0f0a3a335f1ce78c8fcd8ee48f59c3bff8b0a.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10165_large_english.16c6982d0ff0ebe1799a1f3d2c76cc33f2ee757f.png"
							},
							ingame_image: {},
							illustrator: "James Paick",
							rarity: "Common",
							is_black: !0,
							mana_cost: 3,
							item_def: 110165,
							references: []
						}, {
							card_id: 10168,
							base_card_id: 10168,
							card_type: "Improvement",
							card_name: {
								english: "Selemene's Favor"
							},
							card_text: {
								english: "Your tower has +2 Mana."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10168.f3dd30975a7d163d56d3282c751f1219619285c6.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10168_large_english.e38fbbaa5acb95753ee310a1eb550adb2e3c65ae.png"
							},
							ingame_image: {},
							illustrator: "Tenaya Sims",
							rarity: "Common",
							is_green: !0,
							mana_cost: 4,
							item_def: 110168,
							references: []
						}, {
							card_id: 10169,
							base_card_id: 10169,
							card_type: "Improvement",
							card_name: {
								english: "Mist of Avernus"
							},
							card_text: {
								english: "Modify allies with +1 Attack before the action phase."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10169.7ccc2c69db0565e9eb9460d865801c021cba0639.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10169_large_english.cfdff44806cb2ef40f81788870a23c9469e2f40b.png"
							},
							ingame_image: {},
							illustrator: "Joseph Meehan",
							rarity: "Uncommon",
							is_green: !0,
							mana_cost: 3,
							item_def: 110169,
							references: []
						}, {
							card_id: 10170,
							base_card_id: 10170,
							card_type: "Improvement",
							card_name: {
								english: "Altar of the Mad Moon"
							},
							card_text: {
								english: "Allied <span style='font-weight:bold;color:#ffffff;'>Melee Creeps</span> have +2 Regeneration."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10170.651ec2a56cfbd2f33d13d03d4049b049e261c99e.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10170_large_english.4a62a4f8471c6257fe5d667571dc3d1f9b7c5f52.png"
							},
							ingame_image: {},
							illustrator: "Dimitar Marinski",
							rarity: "Uncommon",
							is_green: !0,
							mana_cost: 4,
							item_def: 110170,
							references: [{
									card_id: 1006,
									ref_type: "references"
								}
							]
						}, {
							card_id: 10171,
							base_card_id: 10171,
							card_type: "Improvement",
							card_name: {
								english: "Howling Mind"
							},
							card_text: {
								english: "You and your opponent draw an extra card each round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10171.0583b3acc578ab0408d91f81a43f4a3b22b2398c.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10171_large_english.ed00c2700691ea1ec06c262c70e0ff323ce623b5.png"
							},
							ingame_image: {},
							illustrator: "James Paick",
							rarity: "Uncommon",
							is_blue: !0,
							mana_cost: 3,
							item_def: 110171,
							references: []
						}, {
							card_id: 10172,
							base_card_id: 10172,
							card_type: "Improvement",
							card_name: {
								english: "Temple of War"
							},
							card_text: {
								english: "All equipped heroes have +2 Attack and +1 Armor."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10172.2e0804937231a21e3250ca8ef8abfa3bbddb6e69.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10172_large_english.25affa2a01e470e55b8c7ea0a231e41e93d5947d.png"
							},
							ingame_image: {},
							illustrator: "Titus Lunter",
							rarity: "Uncommon",
							is_red: !0,
							mana_cost: 3,
							item_def: 110172,
							references: []
						}, {
							card_id: 10173,
							base_card_id: 10173,
							card_type: "Improvement",
							card_name: {
								english: "Nether Ward"
							},
							card_text: {
								english: "After opponent plays a spell, deal 3 damage to the enemy tower."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10173.033b5a290f528f65c2651afb26fe3fb3856b6e26.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10173_large_english.6095d3f18cf35d16eee997055a2088e0d87edff9.png"
							},
							ingame_image: {},
							illustrator: "Randy Vargas",
							is_red: !0,
							mana_cost: 4,
							references: []
						}, {
							card_id: 10174,
							base_card_id: 10174,
							card_type: "Improvement",
							card_name: {
								english: "Burning Oil"
							},
							card_text: {
								english: "Your tower has +2 Retaliate."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10174.1ea57f0ee236525a0b66baa511c05aa50c098237.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10174_large_english.4146079fc843db2aa173822d516ffd55a8182bca.png"
							},
							ingame_image: {},
							illustrator: "Daarken",
							rarity: "Uncommon",
							is_red: !0,
							mana_cost: 1,
							item_def: 110174,
							references: []
						}, {
							card_id: 10175,
							base_card_id: 10175,
							card_type: "Improvement",
							card_name: {
								english: "Aghanim's Sanctum"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 1:</span> Fully restore your tower's Mana."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10175.d8b5b5c552b50b34e52b9e36ec12653fb3759518.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10175_large_english.6cb76441aeff6439e35eba61925a608dda709ff3.png"
							},
							ingame_image: {},
							illustrator: "Lake Hurwitz",
							rarity: "Uncommon",
							is_blue: !0,
							mana_cost: 4,
							item_def: 110175,
							references: [{
									card_id: 10464,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10464,
							base_card_id: 10464,
							card_type: "Ability",
							card_name: {
								english: "Aghanim's Sanctum"
							},
							card_text: {
								english: "Fully restore your tower's Mana."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10542,
							base_card_id: 10542,
							card_type: "Ability",
							card_name: {
								english: "Satyr Magician"
							},
							card_text: {
								english: "Fully restore your tower's Mana."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10176,
							base_card_id: 10176,
							card_type: "Improvement",
							card_name: {
								english: "Escape Route"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 1:</span> Return an allied hero to the Fountain."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10176.8eb2c4ea8e13025b903db5566f753c70d70f0b9e.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10176_large_english.5a634c6896904c68966b3922c6300e87ee471164.png"
							},
							ingame_image: {},
							illustrator: "Bayard Wu",
							rarity: "Rare",
							is_black: !0,
							mana_cost: 1,
							item_def: 110176,
							references: [{
									card_id: 10465,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10465,
							base_card_id: 10465,
							card_type: "Ability",
							card_name: {
								english: "Escape Route"
							},
							card_text: {
								english: "Return an allied hero to the Fountain."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10177,
							base_card_id: 10177,
							card_type: "Improvement",
							card_name: {
								english: "Assault Ladders"
							},
							card_text: {
								english: "Allies deal +2 damage when attacking a tower."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10177.0a720140de825b8f17709022f7b2e2c7ec1b5310.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10177_large_english.e5913c4b16e00573378e73f665d6ed58a11ce452.png"
							},
							ingame_image: {},
							illustrator: "Tyler Jacobson",
							is_black: !0,
							mana_cost: 3,
							references: []
						}, {
							card_id: 10178,
							base_card_id: 10178,
							card_type: "Improvement",
							card_name: {
								english: "Grand Melee"
							},
							card_text: {
								english: "If there is an <span style='font-weight:bold;color:#c2352d;'>allied strength hero</span> in this lane, all heroes have +2 Cleave."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10178.76e0bb2818ea1e9662bc500059ce88461dad620a.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10178_large_english.63e98c7f3531c0d0526da2d3da0f336507222c54.png"
							},
							ingame_image: {},
							illustrator: "JiHun Lee",
							rarity: "Rare",
							is_red: !0,
							mana_cost: 3,
							item_def: 110178,
							references: []
						}, {
							card_id: 10179,
							base_card_id: 10179,
							card_type: "Improvement",
							card_name: {
								english: "Steel Reinforcement"
							},
							card_text: {
								english: "Your tower has +1 Armor."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10179.0d10fd377b4169a61fb00c1288ca3b870d225dca.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10179_large_english.7d79bfcb4ed790df6a53b934fcf879bf0def2ef6.png"
							},
							ingame_image: {},
							illustrator: "Lius Lasahido",
							is_red: !0,
							mana_cost: 4,
							references: []
						}, {
							card_id: 10180,
							base_card_id: 10180,
							card_type: "Improvement",
							card_name: {
								english: "Messenger Rookery"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 1:</span> Choose an ally. Choose a combat target for it."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10180.2474743c462a0d97066e3a9e157c3a825c80784d.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10180_large_english.a503a67705d1d004e2560eeab2c36368f56edf0d.png"
							},
							ingame_image: {},
							illustrator: "Forrest Imel",
							rarity: "Common",
							is_blue: !0,
							mana_cost: 1,
							item_def: 110180,
							references: [{
									card_id: 10466,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10466,
							base_card_id: 10466,
							card_type: "Ability",
							card_name: {
								english: "Messenger Rookery"
							},
							card_text: {
								english: "Choose an ally. Choose a combat target for it."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10181,
							base_card_id: 10181,
							card_type: "Improvement",
							card_name: {
								english: "Cheating Death"
							},
							card_text: {
								english: "If there is an <span style='font-weight:bold;color:#479036;'>allied green hero</span> in this lane, allies have a 50% chance of surviving with 1 Health when they would die."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10181.00a134b9e56988aa8991b81f31a12b0f0470bada.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10181_large_english.a5114be38723b054f77ad118dad1651f34eb9b54.png"
							},
							ingame_image: {},
							illustrator: "Daarken",
							rarity: "Rare",
							is_green: !0,
							mana_cost: 5,
							item_def: 110181,
							references: []
						}, {
							card_id: 10182,
							base_card_id: 10182,
							card_type: "Improvement",
							card_name: {
								english: "The Oath"
							},
							card_text: {
								english: "You can not play spells or creeps while this is the active lane. If there is an <span style='font-weight:bold;color:#736e80;'>allied black hero</span> in this lane, allies have +4 Attack."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10182.dc50045772db55b6723733bdab86af792da657af.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10182_large_english.40a5fe58674134d5671a3ee24fe6a3f80ea9fcfb.png"
							},
							ingame_image: {},
							illustrator: "Daarken",
							rarity: "Rare",
							is_black: !0,
							mana_cost: 3,
							item_def: 110182,
							references: []
						}, {
							card_id: 10183,
							base_card_id: 10183,
							card_type: "Improvement",
							card_name: {
								english: "The Omexe Arena"
							},
							card_text: {
								english: "Draw a card after a hero dies."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10183.47c7b564afe5ec9118fa682945b835523f0d425a.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10183_large_english.0a7b4d9fb8a3ff2a86cf100c8695e59a89386e34.png"
							},
							ingame_image: {},
							illustrator: "Dimitar Marinski",
							rarity: "Uncommon",
							is_red: !0,
							mana_cost: 6,
							item_def: 110183,
							references: []
						}, {
							card_id: 10184,
							base_card_id: 10184,
							card_type: "Improvement",
							card_name: {
								english: "Keenfolk Turret"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 1:</span> Deal 2 piercing damage to a unit."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10184.fe19482732ea5279922b61a394d590895e1b0abb.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10184_large_english.66c2c8f28eede5b1c7ccda5216bd8f6f689b08c0.png"
							},
							ingame_image: {},
							illustrator: "Robbie Trevino",
							rarity: "Uncommon",
							is_black: !0,
							mana_cost: 4,
							item_def: 110184,
							references: [{
									card_id: 10467,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10467,
							base_card_id: 10467,
							card_type: "Ability",
							card_name: {
								english: "Keenfolk Turret"
							},
							card_text: {
								english: "Deal 2 piercing damage to a unit."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10185,
							base_card_id: 10185,
							card_type: "Improvement",
							card_name: {
								english: "Steam Cannon"
							},
							card_text: {
								english: "<span style='font-weight:bold;color:#ffffff;'>Active 1:</span> Deal 4 piercing damage to a unit in any lane."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10185.472ba2e6c5591a6267717f595107b8211a032a36.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10185_large_english.ea15596b78c0edc3d59b4d7871b2d048fd8e3db6.png"
							},
							ingame_image: {},
							illustrator: "Lake Hurwitz",
							rarity: "Rare",
							is_black: !0,
							mana_cost: 7,
							item_def: 110185,
							references: [{
									card_id: 10468,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10468,
							base_card_id: 10468,
							card_type: "Ability",
							card_name: {
								english: "Steam Cannon"
							},
							card_text: {
								english: "Deal 4 piercing damage to a unit in any lane."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10187,
							base_card_id: 10187,
							card_type: "Improvement",
							card_name: {
								english: "Glyph of Confusion"
							},
							card_text: {
								english: "Whenever any unit enters this lane, stun it this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10187.500d3d2a6e5bd67ff268725dc6514a7c173d4491.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10187_large_english.cd97a5c26dd4a9320482e68529d7bba522d0e97b.png"
							},
							ingame_image: {},
							illustrator: "Stepan Alekseev",
							rarity: "Rare",
							is_blue: !0,
							mana_cost: 6,
							item_def: 110187,
							references: []
						}, {
							card_id: 10192,
							base_card_id: 10192,
							card_type: "Spell",
							card_name: {
								english: "Rumusque Blessing"
							},
							card_text: {
								english: "Choose a lane. Modify allies in that lane with +3 Health."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10192.bc945ea1b11aaa28249315e0b7d983da51b86c58.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10192_large_english.2211f82a571d1d444b5f9dbd356d313d52db52b9.png"
							},
							ingame_image: {},
							illustrator: "John Stanko",
							rarity: "Common",
							is_green: !0,
							mana_cost: 3,
							item_def: 110192,
							references: []
						}, {
							card_id: 10193,
							base_card_id: 10193,
							card_type: "Improvement",
							card_name: {
								english: "Verdant Refuge"
							},
							card_text: {
								english: "Allies have +1 Armor."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10193.5b5d08dc9f99733a351ffcb4f17b85851c48195c.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10193_large_english.09914fc5d83a39d306fd031a4f8be516c4d6e5c0.png"
							},
							ingame_image: {},
							illustrator: "Chris Rallis",
							is_green: !0,
							mana_cost: 5,
							references: []
						}, {
							card_id: 10194,
							base_card_id: 10194,
							card_type: "Improvement",
							card_name: {
								english: "Watchtower"
							},
							card_text: {
								english: "Whenever an enemy improvement enters this lane, draw a card."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10194.2dda1255debe8bbdcd3416882c9da337c6c4de5e.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10194_large_english.bdbe4931cb7ef82ba6360887c2489f8db203f681.png"
							},
							ingame_image: {},
							illustrator: "Forrest Imel",
							rarity: "Rare",
							is_blue: !0,
							mana_cost: 1,
							item_def: 110194,
							references: []
						}, {
							card_id: 10202,
							base_card_id: 10202,
							card_type: "Item",
							card_name: {
								english: "Assassin's Veil"
							},
							card_text: {
								english: "Equipped hero has +4 Health.<BR>\n<BR>\n<span style='font-weight:bold;color:#ffffff;'>Active 2:</span> Choose a combat target for equipped hero."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10202.291985bec629c14acaecdf928006e962df7c435a.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10202_large_english.ce32378b8547bae22d54c323e142c3d62834f611.png"
							},
							ingame_image: {},
							illustrator: "Pauline Voss",
							rarity: "Uncommon",
							sub_type: "Accessory",
							gold_cost: 6,
							item_def: 110202,
							references: [{
									card_id: 10469,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10469,
							base_card_id: 10469,
							card_type: "Ability",
							card_name: {
								english: "Assassin's Veil"
							},
							card_text: {
								english: "Choose a combat target for equipped hero."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10203,
							base_card_id: 10203,
							card_type: "Item",
							card_name: {
								english: "Phase Boots"
							},
							card_text: {
								english: "Equipped hero has +4 Health.<BR>\n<BR>\n<span style='font-weight:bold;color:#ffffff;'>Active 2:</span> Swap equipped hero with another ally."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10203.d2a4fa3d2d7e42fd4af22b3f0b622ef53648f728.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10203_large_english.7e67a5083f08a1f304602578d80b7ccc944b036f.png"
							},
							ingame_image: {},
							illustrator: "Pauline Voss",
							rarity: "Uncommon",
							sub_type: "Accessory",
							gold_cost: 6,
							item_def: 110203,
							references: [{
									card_id: 10470,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10470,
							base_card_id: 10470,
							card_type: "Ability",
							card_name: {
								english: "Phase Boots"
							},
							card_text: {
								english: "Swap equipped hero with another ally."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10205,
							base_card_id: 10205,
							card_type: "Item",
							card_name: {
								english: "Stonehall Cloak"
							},
							card_text: {
								english: 'Equipped hero has +4 Health. Modify Stonehall Cloak with "Equipped hero has +2 Health" after the combat phase.'
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10205.e2a2c7f9df70397d4b378457985419a4f7df5a69.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10205_large_english.634fe82f96dd2805d33994afe689fd038d0c8aa1.png"
							},
							ingame_image: {},
							illustrator: "Suzanne Helmigh",
							rarity: "Common",
							sub_type: "Accessory",
							gold_cost: 5,
							item_def: 110205,
							references: []
						}, {
							card_id: 10206,
							base_card_id: 10206,
							card_type: "Item",
							card_name: {
								english: "Blink Dagger"
							},
							card_text: {
								english: "Equipped hero has +2 Attack.<BR>\n<BR>\n<span style='font-weight:bold;color:#ffffff;'>Active 2:</span> Move equipped hero to another lane."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10206.aea7821beb6e2e965819b3994b032d320b13bac3.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10206_large_english.c932c30f492503858862805d7a9f337f6ee53e13.png"
							},
							ingame_image: {},
							illustrator: "Pauline Voss",
							rarity: "Uncommon",
							sub_type: "Weapon",
							gold_cost: 7,
							item_def: 110206,
							references: [{
									card_id: 10471,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10471,
							base_card_id: 10471,
							card_type: "Ability",
							card_name: {
								english: "Blink Dagger"
							},
							card_text: {
								english: "Move equipped hero to another lane."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10207,
							base_card_id: 10207,
							card_type: "Item",
							card_name: {
								english: "Revtel Signet Ring"
							},
							card_text: {
								english: "Equipped hero has +4 Health and -3 Bounty."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10207.668577de189f906ce644ef0c057528303c0ac5c1.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10207_large_english.700bbd898cf724852ecf7179df0582bc1c1b6fe7.png"
							},
							ingame_image: {},
							illustrator: "JiHun Lee",
							rarity: "Uncommon",
							sub_type: "Accessory",
							gold_cost: 4,
							item_def: 110207,
							references: []
						}, {
							card_id: 10208,
							base_card_id: 10208,
							card_type: "Item",
							card_name: {
								english: "Barbed Mail"
							},
							card_text: {
								english: "Equipped hero has +1 Armor and +2 Retaliate."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10208.7eeaafba7b5d9ac55c04063e7356282062f25bf1.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10208_large_english.34b4b49a2e94c9147e3ef00a7cac1f5655c22783.png"
							},
							ingame_image: {},
							illustrator: "Sam Carr",
							rarity: "Common",
							sub_type: "Armor",
							gold_cost: 6,
							item_def: 110208,
							references: []
						}, {
							card_id: 10210,
							base_card_id: 10210,
							card_type: "Item",
							card_name: {
								english: "Demagicking Maul"
							},
							card_text: {
								english: "Equipped hero has +2 Attack.<BR>\n<BR>\n<span style='font-weight:bold;color:#ffffff;'>Active 1:</span> Condemn a random enemy improvement. May only be used if equipped hero is unblocked."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10210.8ea1d8a7f8375f7da86c2d377d045a9b668bc1ea.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10210_large_english.421fa9511212bebaa9a1189c4910e085fd5ddf8f.png"
							},
							ingame_image: {},
							illustrator: "Lake Hurwitz",
							rarity: "Uncommon",
							sub_type: "Weapon",
							gold_cost: 5,
							item_def: 110210,
							references: [{
									card_id: 10540,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10540,
							base_card_id: 10540,
							card_type: "Ability",
							card_name: {
								english: "Demagicking Maul"
							},
							card_text: {
								english: "Condemn a random enemy improvement. May only be used if equipped hero is unblocked."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10211,
							base_card_id: 10211,
							card_type: "Item",
							card_name: {
								english: "Obliterating Orb"
							},
							card_text: {
								english: "Condemn an improvement."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10211.7e81c4432e3bf53d908acf96887c21b378706d18.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10211_large_english.a6fca1a4d278ff12e41314964cfa12cea8390113.png"
							},
							ingame_image: {},
							illustrator: "Forrest Imel",
							rarity: "Uncommon",
							sub_type: "Consumable",
							gold_cost: 10,
							item_def: 110211,
							references: []
						}, {
							card_id: 10212,
							base_card_id: 10212,
							card_type: "Item",
							card_name: {
								english: "Blade of the Vigil"
							},
							card_text: {
								english: "Equipped hero has +2 Attack and +2 Cleave."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10212.17f33568c0cbd5c6b78621ffbded32cdb14a97f7.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10212_large_english.789a1fbc9a00bb32eefc922941e2c1359a30ab10.png"
							},
							ingame_image: {},
							illustrator: "Sam Carr",
							rarity: "Common",
							sub_type: "Weapon",
							gold_cost: 7,
							item_def: 110212,
							references: []
						}, {
							card_id: 10213,
							base_card_id: 10213,
							card_type: "Item",
							card_name: {
								english: "Fur-lined Mantle"
							},
							card_text: {
								english: "Equipped hero has +8 Health."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10213.6fcbdc292dafd4fa9ebff40a8640934585673fd8.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10213_large_english.9659a5184ca180d10b4942827b00ab3a2dcac7c8.png"
							},
							ingame_image: {},
							illustrator: "Pauline Voss",
							rarity: "Common",
							sub_type: "Accessory",
							gold_cost: 7,
							item_def: 110213,
							references: []
						}, {
							card_id: 10214,
							base_card_id: 10214,
							card_type: "Item",
							card_name: {
								english: "Chainmail"
							},
							card_text: {
								english: "Equipped hero has +2 Armor."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10214.c6af4723fd468e5b8ca4bcabefcd19872b8581c9.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10214_large_english.87db87c6baa8922f316bc609da39259e143900b4.png"
							},
							ingame_image: {},
							illustrator: "Pauline Voss",
							rarity: "Common",
							sub_type: "Armor",
							gold_cost: 7,
							item_def: 110214,
							references: []
						}, {
							card_id: 10215,
							base_card_id: 10215,
							card_type: "Item",
							card_name: {
								english: "Broadsword"
							},
							card_text: {
								english: "Equipped hero has +4 Attack."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10215.f5116cfa6d48236260d81f98022a63535d2bdf24.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10215_large_english.5c03e8893ea1f20e14aba11085aa62179568a180.png"
							},
							ingame_image: {},
							illustrator: "Tommy Arnold",
							rarity: "Common",
							sub_type: "Weapon",
							gold_cost: 7,
							item_def: 110215,
							references: []
						}, {
							card_id: 10216,
							base_card_id: 10216,
							card_type: "Item",
							card_name: {
								english: "Golden Ticket"
							},
							card_text: {
								english: "Get a random item from the Secret Shop."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10216.eab7439af5f89a4329d5ac5ffa4ebc3850f1b0ff.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10216_large_english.5535c16f19d85d4b867bb84bb85c28d976b1e13a.png"
							},
							ingame_image: {},
							illustrator: "Pauline Voss",
							rarity: "Uncommon",
							sub_type: "Consumable",
							gold_cost: 9,
							item_def: 110216,
							references: []
						}, {
							card_id: 10217,
							base_card_id: 10217,
							card_type: "Item",
							card_name: {
								english: "Rumusque Vestments"
							},
							card_text: {
								english: "Equipped hero has +1 Armor.<BR>\n<BR>\n<span style='font-weight:bold;color:#ffffff;'>Active 2:</span> Heal a unit 4."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10217.c351e63021caf227d92bff6f0dc2dfde511a8a5d.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10217_large_english.838701bd4e36a2b96a71a3baef5fd0f42960becc.png"
							},
							ingame_image: {},
							illustrator: "Sara Winters",
							rarity: "Common",
							sub_type: "Armor",
							gold_cost: 9,
							item_def: 110217,
							references: [{
									card_id: 10473,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10473,
							base_card_id: 10473,
							card_type: "Ability",
							card_name: {
								english: "Rumusque Vestments"
							},
							card_text: {
								english: "Heal a unit 4."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10218,
							base_card_id: 10218,
							card_type: "Item",
							card_name: {
								english: "Keenfolk Musket"
							},
							card_text: {
								english: "Equipped hero has +2 Attack.<BR>\n<BR>\n<span style='font-weight:bold;color:#ffffff;'>Active 2:</span> Deal 2 damage to a unit."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10218.0562cabc3ebcf16a346023cb65696d8b314e6f4c.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10218_large_english.012753733a8b69695801a5a4c4ccf84b1a1c99c7.png"
							},
							ingame_image: {},
							illustrator: "Mobo Boehme",
							rarity: "Common",
							sub_type: "Weapon",
							gold_cost: 7,
							item_def: 110218,
							references: [{
									card_id: 10474,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10474,
							base_card_id: 10474,
							card_type: "Ability",
							card_name: {
								english: "Keenfolk Musket"
							},
							card_text: {
								english: "Deal 2 damage to a unit."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10220,
							base_card_id: 10220,
							card_type: "Item",
							card_name: {
								english: "Ring of Tarrasque"
							},
							card_text: {
								english: "Equipped hero has +4 Health and +6 Regeneration."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10220.e4eef11b4d11b1b5ddebc64186167157f01ef9bb.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10220_large_english.a605541a29e4da2e56293fd2fbb04283d969e058.png"
							},
							ingame_image: {},
							illustrator: "Daarken",
							rarity: "Common",
							sub_type: "Accessory",
							gold_cost: 12,
							item_def: 110220,
							references: []
						}, {
							card_id: 10222,
							base_card_id: 10222,
							card_type: "Item",
							card_name: {
								english: "Bracers of Sacrifice"
							},
							card_text: {
								english: "Equipped hero has +2 Armor.<BR>\n<BR>\n<span style='font-weight:bold;color:#ffffff;'>Active 1:</span> Deal 6 damage to equipped hero's enemy neighbors and condemn equipped hero."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10222.d11548f662d2d292d19cb52f78182020f3fc0a8b.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10222_large_english.d98a1845b4bf07f7b96d5d0a22e5b34b3df2c4a9.png"
							},
							ingame_image: {},
							illustrator: "Mark Winters",
							rarity: "Rare",
							sub_type: "Armor",
							gold_cost: 8,
							item_def: 110222,
							references: [{
									card_id: 10476,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10476,
							base_card_id: 10476,
							card_type: "Ability",
							card_name: {
								english: "Bracers of Sacrifice"
							},
							card_text: {
								english: "Deal 6 damage to equipped hero's enemy neighbors and condemn equipped hero."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10223,
							base_card_id: 10223,
							card_type: "Item",
							card_name: {
								english: "Red Mist Maul"
							},
							card_text: {
								english: "Equipped hero has +2 Attack and +5 Siege."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10223.c7e8dddebdd23c49533f39758578f3a5741a64d9.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10223_large_english.758413bea0c2585a948acd2f0a7c741cf3cbf875.png"
							},
							ingame_image: {},
							illustrator: "Pauline Voss",
							rarity: "Common",
							sub_type: "Weapon",
							gold_cost: 10,
							item_def: 110223,
							references: []
						}, {
							card_id: 10224,
							base_card_id: 10224,
							card_type: "Item",
							card_name: {
								english: "Helm of the Dominator"
							},
							card_text: {
								english: "Equipped hero has +3 Armor.<BR>\n<BR>\n<span style='font-weight:bold;color:#ffffff;'>Active 2:</span> Get control of an enemy creep."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10224.5342f086b5d82b9b189a2fe8a87363fd8ac08eb8.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10224_large_english.68710c4811c246545980776f466194010d88c42e.png"
							},
							ingame_image: {},
							illustrator: "Chris Welch",
							rarity: "Uncommon",
							sub_type: "Armor",
							gold_cost: 19,
							item_def: 110224,
							references: [{
									card_id: 10477,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10477,
							base_card_id: 10477,
							card_type: "Ability",
							card_name: {
								english: "Helm of the Dominator"
							},
							card_text: {
								english: "Get control of an enemy creep."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10225,
							base_card_id: 10225,
							card_type: "Item",
							card_name: {
								english: "Vesture of the Tyrant"
							},
							card_text: {
								english: "Equipped hero has +3 Armor and Rapid Deployment. Your tower has +3 Armor."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10225.6626f9c164c5ef3b5e28733d0a5b8782c7863c5f.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10225_large_english.4da0814b85aec9f5aeb250e7eca1b5083f580da8.png"
							},
							ingame_image: {},
							illustrator: "Suzanne Helmigh",
							rarity: "Rare",
							sub_type: "Armor",
							gold_cost: 19,
							item_def: 110225,
							references: []
						}, {
							card_id: 10226,
							base_card_id: 10226,
							card_type: "Item",
							card_name: {
								english: "Wingfall Hammer"
							},
							card_text: {
								english: "Equipped hero has +4 Attack.<BR>\n<BR>\n<span style='font-weight:bold;color:#ffffff;'>Active 1:</span> Give equipped hero and its allied neighbors +X Regeneration this round where X is half its Attack."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10226.d6e408d4954c77ca98be49cb2f2f37f2bea1b61e.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10226_large_english.71ae49a4a9ac40a776651d8632561683f03f9323.png"
							},
							ingame_image: {},
							illustrator: "JiHun Lee",
							rarity: "Rare",
							sub_type: "Weapon",
							gold_cost: 19,
							item_def: 110226,
							references: [{
									card_id: 10478,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10478,
							base_card_id: 10478,
							card_type: "Ability",
							card_name: {
								english: "Wingfall Hammer"
							},
							card_text: {
								english: "Give equipped hero and its allied neighbors +X Regeneration this round where X is half its Attack."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10230,
							base_card_id: 10230,
							card_type: "Item",
							card_name: {
								english: "Ristul Emblem"
							},
							card_text: {
								english: "Equipped hero has +4 Health and -2 Armor. The unit blocking equipped hero has -2 Armor."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10230.a6e33545f8e4a0872932039811c981eeb39e84d9.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10230_large_english.c0a4a7cb640e464c8dd45a447362237433461a9e.png"
							},
							ingame_image: {},
							illustrator: "Christine Choi",
							rarity: "Rare",
							sub_type: "Accessory",
							gold_cost: 4,
							item_def: 110230,
							references: []
						}, {
							card_id: 10231,
							base_card_id: 10231,
							card_type: "Item",
							card_name: {
								english: "Cloak of Endless Carnage"
							},
							card_text: {
								english: "Equipped hero has +8 Health. Draw a card after an allied neighbor of equipped hero dies."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10231.2b1a9e7e240ded213fb1139db6c3597e58876016.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10231_large_english.ef0bc00eee544015bb80c5536661ae21e3246a2c.png"
							},
							ingame_image: {},
							illustrator: "Daarken",
							rarity: "Rare",
							sub_type: "Accessory",
							gold_cost: 13,
							item_def: 110231,
							references: []
						}, {
							card_id: 10232,
							base_card_id: 10232,
							card_type: "Item",
							card_name: {
								english: "Seraphim Shield"
							},
							card_text: {
								english: "Equipped hero has +2 Armor. All units have -2 Attack."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10232.9fbfded5a831e5f6d4805f6c24fd365aebc98788.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10232_large_english.bc0dce572a5e27c08cd7e632aeb9f1315194e61a.png"
							},
							ingame_image: {},
							illustrator: "Magali Villeneuve",
							rarity: "Rare",
							sub_type: "Armor",
							gold_cost: 13,
							item_def: 110232,
							references: []
						}, {
							card_id: 10234,
							base_card_id: 10234,
							card_type: "Item",
							card_name: {
								english: "Poaching Knife"
							},
							card_text: {
								english: "Equipped hero has +2 Attack. Get 5 gold after an enemy hero dies. Get 1 gold after an enemy creep dies."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10234.543e935ef22e2aa22d3d307d600d26958c0c653b.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10234_large_english.ca0bdfccffed43ba4ac88256d5c9a06920d06f45.png"
							},
							ingame_image: {},
							illustrator: "Pauline Voss",
							rarity: "Rare",
							sub_type: "Weapon",
							gold_cost: 8,
							item_def: 110234,
							references: []
						}, {
							card_id: 10235,
							base_card_id: 10235,
							card_type: "Item",
							card_name: {
								english: "Book of the Dead"
							},
							card_text: {
								english: "Equipped hero has +4 Health. Add a charge to Book of the Dead after an allied <span style='font-weight:bold;color:#ffffff;'>Melee Creep</span> dies.<BR>\n<BR>\n<span style='font-weight:bold;color:#ffffff;'>Active 2:</span> Summon a <span style='font-weight:bold;color:#ffffff;'>Zombie</span> for each charge and remove all charges."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10235.4547ba37bddb345f94977ea70806b5d8e5b3df5d.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10235_large_english.80399428e8e7b3295d50f2cb8da5043dc9577052.png"
							},
							ingame_image: {},
							illustrator: "Pauline Voss",
							rarity: "Common",
							sub_type: "Accessory",
							gold_cost: 10,
							item_def: 110235,
							references: [{
									card_id: 10480,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10480,
							base_card_id: 10480,
							card_type: "Ability",
							card_name: {
								english: "Book of the Dead"
							},
							card_text: {
								english: "Summon a <span style='font-weight:bold;color:#ffffff;'>Zombie</span> for each charge and remove all charges."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: [{
									card_id: 1009,
									ref_type: "references"
								}, {
									card_id: 1006,
									ref_type: "references"
								}
							]
						}, {
							card_id: 10236,
							base_card_id: 10236,
							card_type: "Item",
							card_name: {
								english: "Hero's Cape"
							},
							card_text: {
								english: "Equipped hero has +16 Health."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10236.b8720448263fd63e447c8a1799af75f56ac08e2e.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10236_large_english.5f0857dfcee715ca0d244239b8ab293f1ec3adcd.png"
							},
							ingame_image: {},
							illustrator: "Pauline Voss",
							rarity: "Uncommon",
							sub_type: "Accessory",
							gold_cost: 15,
							item_def: 110236,
							references: []
						}, {
							card_id: 10237,
							base_card_id: 10237,
							card_type: "Item",
							card_name: {
								english: "Platemail"
							},
							card_text: {
								english: "Equipped hero has +4 Armor."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10237.12ee393fbd37d7ad79e775ab6360727362f79617.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10237_large_english.3e81c8cae64068ab28d950dfcd3786ade88c59fd.png"
							},
							ingame_image: {},
							illustrator: "Sam Carr",
							rarity: "Uncommon",
							sub_type: "Armor",
							gold_cost: 15,
							item_def: 110237,
							references: []
						}, {
							card_id: 10238,
							base_card_id: 10238,
							card_type: "Item",
							card_name: {
								english: "Claymore"
							},
							card_text: {
								english: "Equipped hero has +8 Attack."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10238.af1c4e6a32483e582ab953d30082941d46ff9266.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10238_large_english.eabdf168571e180667a203a5ecddb2b001b41fdb.png"
							},
							ingame_image: {},
							illustrator: "Tommy Arnold",
							rarity: "Uncommon",
							sub_type: "Weapon",
							gold_cost: 15,
							item_def: 110238,
							references: []
						}, {
							card_id: 10241,
							base_card_id: 10241,
							card_type: "Item",
							card_name: {
								english: "Claszureme Hourglass"
							},
							card_text: {
								english: "Equipped hero has +4 Health. Whenever opponent draws a card, give that card +1 Lock if equipped hero is in any lane."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10241.5403aa618f58f7251802993b710a9f7583d0b786.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10241_large_english.67b8685f89299250d241f58902cdd70334de4a9d.png"
							},
							ingame_image: {},
							illustrator: "Magali Villeneuve",
							rarity: "Uncommon",
							sub_type: "Accessory",
							gold_cost: 10,
							item_def: 110241,
							references: []
						}, {
							card_id: 10242,
							base_card_id: 10242,
							card_type: "Item",
							card_name: {
								english: "Shield of Basilius"
							},
							card_text: {
								english: "Equipped hero has +2 Armor. Equipped hero's allied neighbors have +1 Armor."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10242.910a5c7b7183d8b641121692feb229fb11a82972.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10242_large_english.e85f67b26090d341d7602d9b9274ccafa8bb237c.png"
							},
							ingame_image: {},
							illustrator: "Pauline Voss",
							rarity: "Common",
							sub_type: "Armor",
							gold_cost: 8,
							item_def: 110242,
							references: []
						}, {
							card_id: 10243,
							base_card_id: 10243,
							card_type: "Item",
							card_name: {
								english: "Shield of Aquila"
							},
							card_text: {
								english: "Equipped hero has +2 Armor. Equipped hero's allied neighbors have +3 Armor."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10243.63893d91ee681a4b15645343c8b9542ce160698c.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10243_large_english.00f29713df09d38a772f31520da03de286fa12df.png"
							},
							ingame_image: {},
							illustrator: "Anastasia Ovchinnikova",
							rarity: "Rare",
							sub_type: "Armor",
							gold_cost: 10,
							item_def: 110243,
							references: []
						}, {
							card_id: 10248,
							base_card_id: 10248,
							card_type: "Item",
							card_name: {
								english: "Shiva's Guard"
							},
							card_text: {
								english: "Equipped hero has +2 Armor.<BR>\n<BR>\n<span style='font-weight:bold;color:#ffffff;'>Active 2:</span> Modify a unit and its allied neighbors with -2 Attack."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10248.2a80ad64c6f1483eed64309e8f0f9588b100065a.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10248_large_english.a9160c1f0394a274c79eee89cf2c25875e0cc720.png"
							},
							ingame_image: {},
							illustrator: "Magali Villeneuve",
							rarity: "Rare",
							sub_type: "Armor",
							gold_cost: 16,
							item_def: 110248,
							references: [{
									card_id: 10481,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10481,
							base_card_id: 10481,
							card_type: "Ability",
							card_name: {
								english: "Shiva's Guard"
							},
							card_text: {
								english: "Modify a unit and its allied neighbors with -2 Attack."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10252,
							base_card_id: 10252,
							card_type: "Item",
							card_name: {
								english: "Stonehall Pike"
							},
							card_text: {
								english: 'Equipped hero has +2 Attack. Modify Stonehall Pike with "Equipped hero has +1 Attack" after the combat phase.'
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10252.be2238de1794c3424f9ce23d11fbe11f45c652ff.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10252_large_english.b5101076b1a5f3995765a27819a6a222581cc078.png"
							},
							ingame_image: {},
							illustrator: "Robbie Trevino",
							rarity: "Common",
							sub_type: "Weapon",
							gold_cost: 6,
							item_def: 110252,
							references: []
						}, {
							card_id: 10253,
							base_card_id: 10253,
							card_type: "Item",
							card_name: {
								english: "Stonehall Plate"
							},
							card_text: {
								english: 'Equipped hero has +1 Armor. Modify Stonehall Plate with "Equipped hero has +1 Armor" after the combat phase.'
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10253.6701aa5baec9a8196db6c5a4f4679dd18462954e.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10253_large_english.fbf25bea66c65ba345ab5d29282b1e429ae06f9a.png"
							},
							ingame_image: {},
							illustrator: "Pauline Voss",
							rarity: "Common",
							sub_type: "Armor",
							gold_cost: 6,
							item_def: 110253,
							references: []
						}, {
							card_id: 10255,
							base_card_id: 10255,
							card_type: "Item",
							card_name: {
								english: "Shop Deed"
							},
							card_text: {
								english: "Each item in your Secret Shop costs X less gold, where X is equal to its base cost."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10255.7eb65eec608ac46cb8171222bae12fdcb8f0e6c2.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10255_large_english.df2383fae41c49d8b58b94de8089c290958fb4f1.png"
							},
							ingame_image: {},
							illustrator: "Lius Lasahido",
							rarity: "Rare",
							sub_type: "Deed",
							gold_cost: 22,
							item_def: 110255,
							references: []
						}, {
							card_id: 10256,
							base_card_id: 10256,
							card_type: "Item",
							card_name: {
								english: "Jasper Daggers"
							},
							card_text: {
								english: "Equipped hero has +2 Attack and Pierce."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10256.943fe541b9635df2e0cbc75d600d6b6fcb8c1155.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10256_large_english.df08ad32ce976a01aa2f78ce6625a8120e58628c.png"
							},
							ingame_image: {},
							illustrator: "Pauline Voss",
							rarity: "Uncommon",
							sub_type: "Weapon",
							gold_cost: 7,
							item_def: 110256,
							references: []
						}, {
							card_id: 10259,
							base_card_id: 10259,
							card_type: "Item",
							card_name: {
								english: "Keenfolk Plate"
							},
							card_text: {
								english: "Equipped hero has +1 Armor. Equipped hero has +1 Armor for each of its attackers."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10259.5edb9bb7ca2ef69ebc7a1a32f10a88627b19e885.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10259_large_english.4b3dcf5ff5326689d61f3d30fc05a6e09101880a.png"
							},
							ingame_image: {},
							illustrator: "James Paick",
							rarity: "Uncommon",
							sub_type: "Armor",
							gold_cost: 8,
							item_def: 110259,
							references: []
						}, {
							card_id: 10260,
							base_card_id: 10260,
							card_type: "Item",
							card_name: {
								english: "Horn of the Alpha"
							},
							card_text: {
								english: "Equipped hero has +4 Health.<BR>\n<BR>\n<span style='font-weight:bold;color:#ffffff;'>Active 2:</span> Summon a <span style='font-weight:bold;color:#ffffff;'>Thunderhide Pack</span>."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10260.f008a86ce8c33d887fd22ece50a3ac0432f18652.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10260_large_english.86fde1495a97e6e76d19953921b7f2013c2aa6b4.png"
							},
							ingame_image: {},
							illustrator: "Anastasia Ovchinnikova",
							rarity: "Rare",
							sub_type: "Accessory",
							gold_cost: 25,
							item_def: 110260,
							references: [{
									card_id: 10483,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10483,
							base_card_id: 10483,
							card_type: "Ability",
							card_name: {
								english: "Horn of the Alpha"
							},
							card_text: {
								english: "Summon a <span style='font-weight:bold;color:#ffffff;'>Thunderhide Pack</span>."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: [{
									card_id: 10102,
									ref_type: "references"
								}
							]
						}, {
							card_id: 10262,
							base_card_id: 10262,
							card_type: "Item",
							card_name: {
								english: "Nyctasha's Guard"
							},
							card_text: {
								english: "Equipped hero has +1 Armor.<BR>\n<BR>\n<span style='font-weight:bold;color:#ffffff;'>Active 1:</span> Move equipped hero's enemy neighbors to random other lanes."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10262.7c69c4de1d9da8c6c35373440d051421df3a06aa.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10262_large_english.b5107befcd8b2c35b0675d1763a3ae93e1a3226f.png"
							},
							ingame_image: {},
							illustrator: "Forrest Imel",
							rarity: "Rare",
							sub_type: "Armor",
							gold_cost: 25,
							item_def: 110262,
							references: [{
									card_id: 10484,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10484,
							base_card_id: 10484,
							card_type: "Ability",
							card_name: {
								english: "Nyctasha's Guard"
							},
							card_text: {
								english: "Move equipped hero's enemy neighbors to random other lanes."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10263,
							base_card_id: 10263,
							card_type: "Item",
							card_name: {
								english: "Apotheosis Blade"
							},
							card_text: {
								english: "Equipped hero has +8 Attack and +4 Siege. Condemn each unit equipped hero deals battle damage to.<BR>\n<BR>\n<span style='font-weight:bold;color:#ffffff;'>Active 1:</span> Condemn enemy improvements. Condemn each item equipped by the unit blocking equipped hero."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10263.72384252a5de0a86182aa952059a907880d8eef0.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10263_large_english.241791209a032f85fcc988bee6cc724f6f65e06b.png"
							},
							ingame_image: {},
							illustrator: "Kieran Yanner",
							rarity: "Rare",
							sub_type: "Weapon",
							gold_cost: 25,
							item_def: 110263,
							references: [{
									card_id: 10541,
									ref_type: "active_ability"
								}
							]
						}, {
							card_id: 10541,
							base_card_id: 10541,
							card_type: "Ability",
							card_name: {
								english: "Apotheosis Blade"
							},
							card_text: {
								english: "Condemn enemy improvements. Condemn each item equipped by the unit blocking equipped hero."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10142,
							base_card_id: 10142,
							card_type: "Spell",
							card_name: {
								english: "Corrosive Mist"
							},
							card_text: {
								english: "Condemn all equipped items."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10142.5f9643f56d886b272fc5af8fa3f6d58fc01cd5b2.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10142_large_english.2653a8ebd727be5dc3a996bd7b87048915b57408.png"
							},
							ingame_image: {},
							illustrator: "Magali Villeneuve",
							rarity: "Rare",
							is_green: !0,
							mana_cost: 5,
							item_def: 110142,
							references: []
						}, {
							card_id: 10191,
							base_card_id: 10191,
							card_type: "Spell",
							card_name: {
								english: "Routed"
							},
							card_text: {
								english: 'Modify enemy heroes at the Fountain with -X Attack where X is half their Attack. Modify them with "Your tower has -1 Mana."'
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10191.a8e63eabc2b13dc8368045564cd5ee524e22d57f.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10191_large_english.c97a1ec7d2470c25d3a5f43a0b2b5c3b34c6dff1.png"
							},
							ingame_image: {},
							illustrator: "Robert Simon",
							rarity: "Rare",
							is_red: !0,
							mana_cost: 6,
							item_def: 110191,
							references: []
						}, {
							card_id: 10196,
							base_card_id: 10196,
							card_type: "Spell",
							card_name: {
								english: "...And One For Me"
							},
							card_text: {
								english: "Choose a hero.  Put a base copy of a random item equipped by that hero into your hand."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10196.18d3d793e3ee07f5d0dbd0ed2be0bfdda1853b64.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10196_large_english.f8f4b2f8abbaa635f1fa84a4ccd76f84f8c484bc.png"
							},
							ingame_image: {},
							illustrator: "Randy Vargas",
							rarity: "Uncommon",
							is_blue: !0,
							mana_cost: 4,
							item_def: 110196,
							references: []
						}, {
							card_id: 10198,
							base_card_id: 10198,
							card_type: "Spell",
							card_name: {
								english: "Rolling Storm"
							},
							card_text: {
								english: "Deal 2 damage to all towers in all lanes."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10198.02643bccc4a7958def9ae3a9933dfd917bb75d3c.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10198_large_english.ca2c7656a7dadf728ec3b209959f9c7ab272f279.png"
							},
							ingame_image: {},
							illustrator: "Daarken",
							rarity: "Uncommon",
							is_blue: !0,
							mana_cost: 3,
							item_def: 110198,
							references: []
						}, {
							card_id: 10267,
							base_card_id: 10267,
							card_type: "Spell",
							card_name: {
								english: "Astral Imprisonment"
							},
							card_text: {
								english: "Stun a unit this round. Give that unit Damage Immunity this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10267.f221646cae086ecea571669062b0ad08b0cc7a56.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10267_large_english.c3cb1c3b3b63d98dca5af4d7688f92dcf38941b5.png"
							},
							ingame_image: {},
							illustrator: "Joseph Meehan",
							is_blue: !0,
							mana_cost: 4,
							references: []
						}, {
							card_id: 10268,
							base_card_id: 10268,
							card_type: "Spell",
							card_name: {
								english: "Lodestone Demolition"
							},
							card_text: {
								english: "Deal damage to the enemy tower equal to the total Armor on enemies."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10268.1630e864ecbc70e5ea6998dc394ce562e97cff3f.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10268_large_english.cddbe04a77f600b2024623253bfd61000cf31e24.png"
							},
							ingame_image: {},
							illustrator: "Darek Zabrocki",
							rarity: "Uncommon",
							is_black: !0,
							mana_cost: 3,
							item_def: 110268,
							references: []
						}, {
							card_id: 10270,
							base_card_id: 10270,
							card_type: "Spell",
							card_name: {
								english: "Grazing Shot"
							},
							card_text: {
								english: "Deal 2 damage to a unit in any lane."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10270.cb6b13cf05b3031d1afcd38421452f81478734bf.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10270_large_english.6af3e4d6608f5224681af8bef1f9325025c5fd65.png"
							},
							ingame_image: {},
							illustrator: "Kieran Yanner",
							rarity: "Common",
							is_black: !0,
							mana_cost: 1,
							item_def: 110270,
							references: []
						}, {
							card_id: 10272,
							base_card_id: 10272,
							card_type: "Spell",
							card_name: {
								english: "Assassinate"
							},
							card_text: {
								english: "Deal 10 piercing damage to a unit in any lane."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10272.5ce226b5830a6e8842cc5cbbf1fe74d078c211f4.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10272_large_english.9c6f0279906e441f59d75690eb04fc5c5cc9afe9.png"
							},
							ingame_image: {},
							illustrator: "Forrest Imel",
							is_black: !0,
							mana_cost: 7,
							references: []
						}, {
							card_id: 10273,
							base_card_id: 10273,
							card_type: "Spell",
							card_name: {
								english: "Hip Fire"
							},
							card_text: {
								english: "Deal 4 damage to a unit. <br><br><span style='font-weight:bold;color:#ffffff;'> Get initiative.</span>"
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10273.e136bc0cc14635fcd4fe758b80c3e846e5337241.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10273_large_english.58ee0cd6648a11c8334bb755428c5739d42f1b23.png"
							},
							ingame_image: {},
							illustrator: "Daarken",
							rarity: "Common",
							is_black: !0,
							mana_cost: 4,
							item_def: 110273,
							references: []
						}, {
							card_id: 10274,
							base_card_id: 10274,
							card_type: "Spell",
							card_name: {
								english: "Heartstopper Aura"
							},
							card_text: {
								english: "Modify a <span style='font-weight:bold;color:#736e80;'>black hero</span> with \"Deal 2 piercing damage to this hero's enemy neighbors before the action phase.\""
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10274.b662c863cb95d046da9aade01cb3a2662de1aa26.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10274_large_english.b6b676b44d9928fc41ae1add657ee765e93fe02b.png"
							},
							ingame_image: {},
							illustrator: "Kieran Yanner",
							is_black: !0,
							mana_cost: 4,
							references: []
						}, {
							card_id: 10275,
							base_card_id: 10275,
							card_type: "Spell",
							card_name: {
								english: "Mana Drain"
							},
							card_text: {
								english: "Give the enemy tower -2 Mana this round and give your tower +2 Mana this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10275.052001f72ea072d9f61246448e50c8954e855fec.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10275_large_english.96ff88e6d34faa779ebd17edf1ba3a2c1a79334d.png"
							},
							ingame_image: {},
							illustrator: "Stepan Alekseev",
							is_black: !0,
							mana_cost: 2,
							references: []
						}, {
							card_id: 10277,
							base_card_id: 10277,
							card_type: "Spell",
							card_name: {
								english: "Frostbite"
							},
							card_text: {
								english: "Deal 2 damage to a unit and disarm it this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10277.6e8142cc509d853344b6b1746ec82bca7f349519.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10277_large_english.47b4db8c8269c72856eb81eb78f5acbfddaa34e7.png"
							},
							ingame_image: {},
							illustrator: "Stepan Alekseev",
							is_blue: !0,
							mana_cost: 3,
							references: []
						}, {
							card_id: 10278,
							base_card_id: 10278,
							card_type: "Spell",
							card_name: {
								english: "Thundergod's Wrath"
							},
							card_text: {
								english: "Deal 4 piercing damage to each enemy hero in all lanes."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10278.2a8b26d7bd15731369285a2206d28f8ceb9d72ca.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10278_large_english.70c95e378d77edd76c959f4a58525f4105e8a83c.png"
							},
							ingame_image: {},
							illustrator: "David Palumbo",
							is_blue: !0,
							mana_cost: 7,
							references: []
						}, {
							card_id: 10280,
							base_card_id: 10280,
							card_type: "Spell",
							card_name: {
								english: "Empower"
							},
							card_text: {
								english: "Modify a unit with +3 Attack and +3 Cleave."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10280.717d0b4c863a25ad1d173fbbc0aec518fb921503.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10280_large_english.fddde9e25b3e0f9710c2adf0df35e67ebc531803.png"
							},
							ingame_image: {},
							illustrator: "Magali Villeneuve",
							is_green: !0,
							mana_cost: 4,
							references: []
						}, {
							card_id: 10281,
							base_card_id: 10281,
							card_type: "Spell",
							card_name: {
								english: "Ion Shell"
							},
							card_text: {
								english: "Modify a unit with +3 Retaliate."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10281.eec8b13d54c8f23c4e2e55f839368b8d2a9315fb.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10281_large_english.96b50de81fcd1a5f888ad944500f3f45df7e6ed8.png"
							},
							ingame_image: {},
							illustrator: "Stepan Alekseev",
							is_green: !0,
							mana_cost: 4,
							references: []
						}, {
							card_id: 10282,
							base_card_id: 10282,
							card_type: "Spell",
							card_name: {
								english: "Overpower"
							},
							card_text: {
								english: "Give a <span style='font-weight:bold;color:#c2352d;'>strength hero</span> +4 Attack and +4 Armor this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10282.1efbd5ae29a9d227a8dd917ac47d5a179150b442.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10282_large_english.280242ff3fe8614b45c3d8d9614aad99bf2098aa.png"
							},
							ingame_image: {},
							illustrator: "Forrest Imel",
							is_red: !0,
							mana_cost: 4,
							references: []
						}, {
							card_id: 10287,
							base_card_id: 10287,
							card_type: "Spell",
							card_name: {
								english: "Aphotic Shield"
							},
							card_text: {
								english: "Purge your opponent's effects from a unit. Give that unit +2 Armor and +2 Retaliate this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10287.8e0c063a22e021c8b76c059bf6c11b6090e8e4c8.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10287_large_english.862b26c569b743c6e1ee88a2d103504eef4b092b.png"
							},
							ingame_image: {},
							illustrator: "Chase Stone",
							is_green: !0,
							mana_cost: 2,
							references: []
						}, {
							card_id: 10288,
							base_card_id: 10288,
							card_type: "Spell",
							card_name: {
								english: "Berserker's Call"
							},
							card_text: {
								english: "Choose an <span style='font-weight:bold;color:#c2352d;'>allied strength hero</span>. It battles its enemy neighbors."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10288.c1bb6d79b9117d124fc130f240410da3dadd53b4.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10288_large_english.d15ed59d6bbe91db1fca26804fe44809fbe80f31.png"
							},
							ingame_image: {},
							illustrator: "Tyler Jacobson",
							is_red: !0,
							mana_cost: 6,
							references: []
						}, {
							card_id: 10289,
							base_card_id: 10289,
							card_type: "Spell",
							card_name: {
								english: "Blood Rage"
							},
							card_text: {
								english: "Silence a unit this round. Give that unit +4 Attack this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10289.e9e94d913e4c8072f7e4d48ca414d07c09da0e1d.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10289_large_english.dcf766f305d7d040f01ad479387faf804ed98848.png"
							},
							ingame_image: {},
							illustrator: "Lake Hurwitz",
							is_black: !0,
							mana_cost: 5,
							references: []
						}, {
							card_id: 10290,
							base_card_id: 10290,
							card_type: "Spell",
							card_name: {
								english: "Kraken Shell"
							},
							card_text: {
								english: "Modify a <span style='font-weight:bold;color:#c2352d;'>strength hero</span> with +1 Armor. <br><br><span style='font-weight:bold;color:#ffffff;'> Get initiative.</span>"
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10290.e8c27c0fbcb9d18e0531d840d0c5083cd806ad81.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10290_large_english.f5df5e740f3648d9b3cd5ed9726fed768bda1d51.png"
							},
							ingame_image: {},
							illustrator: "Daarken",
							is_red: !0,
							mana_cost: 1,
							references: []
						}, {
							card_id: 10291,
							base_card_id: 10291,
							card_type: "Improvement",
							card_name: {
								english: "March of the Machines"
							},
							card_text: {
								english: "Before the action phase, if there are charges on March of the Machines, remove one and deal 2 damage to the enemy tower and 2 damage to each enemy."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10291.a7cfd666856d5b71c21f768cb969de35bf6b2b5a.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10291_large_english.a28d67698c5e5fbd48e093c5013b5e4dc6254c82.png"
							},
							ingame_image: {},
							illustrator: "James Paick",
							is_black: !0,
							mana_cost: 5,
							references: []
						}, {
							card_id: 10292,
							base_card_id: 10292,
							card_type: "Spell",
							card_name: {
								english: "Double Edge"
							},
							card_text: {
								english: "Give a <span style='font-weight:bold;color:#c2352d;'>strength hero</span> +8 Attack and -8 Armor this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10292.c969a021e6b0f4652ceec97ac8a8437fba24a5f2.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10292_large_english.85e5a0ac0aef186c5db6b6cf8d90b82bc85d7d1b.png"
							},
							ingame_image: {},
							illustrator: "Lius Lasahido",
							is_red: !0,
							mana_cost: 1,
							references: []
						}, {
							card_id: 10293,
							base_card_id: 10293,
							card_type: "Spell",
							card_name: {
								english: "Primal Roar"
							},
							card_text: {
								english: "Stun a unit blocking an <span style='font-weight:bold;color:#c2352d;'>allied strength hero</span> this round. Move that unit's allied neighbors to random other lanes."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10293.fd1f927f707d0e50da5c8e60ccfc5a0fb5bc14e9.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10293_large_english.231f1af28592e22cdb6df1c4aede50154f1ec947.png"
							},
							ingame_image: {},
							illustrator: "Clint Cearley",
							is_red: !0,
							mana_cost: 7,
							references: []
						}, {
							card_id: 10294,
							base_card_id: 10294,
							card_type: "Spell",
							card_name: {
								english: "Viper Strike"
							},
							card_text: {
								english: 'Give a unit "Deal 2 piercing damage to this unit before the action phase" until it dies.'
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10294.fce39a4c45cfc6e1f7f0e390b4317373a50615d1.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10294_large_english.97bcd48b3d4176d8277e1f17797d21d6800c4b18.png"
							},
							ingame_image: {},
							illustrator: "Lars Grant-West",
							is_green: !0,
							mana_cost: 3,
							references: []
						}, {
							card_id: 10295,
							base_card_id: 10295,
							card_type: "Spell",
							card_name: {
								english: "Arcane Censure"
							},
							card_text: {
								english: "Modify the enemy tower with -1 Mana."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10295.fc45257d443150f3dd3f4307cce48ca5afc3305a.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10295_large_english.a56e9ad37d45435ba118423dae0a0d6fe66ca00d.png"
							},
							ingame_image: {},
							illustrator: "Alix Branwyn",
							rarity: "Common",
							is_black: !0,
							mana_cost: 4,
							item_def: 110295,
							references: []
						}, {
							card_id: 10296,
							base_card_id: 10296,
							card_type: "Spell",
							card_name: {
								english: "Whirling Death"
							},
							card_text: {
								english: "Choose an <span style='font-weight:bold;color:#c2352d;'>allied strength hero</span>. Deal 2 damage to its enemy neighbors and give them -2 Attack this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10296.d10d22d473f407811637c99279aefa2a253b6045.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10296_large_english.d5a1d9d115a7ab1d965c44f9f5b5769dd0d5cc96.png"
							},
							ingame_image: {},
							illustrator: "JiHun Lee",
							is_red: !0,
							mana_cost: 2,
							references: []
						}, {
							card_id: 10297,
							base_card_id: 10297,
							card_type: "Spell",
							card_name: {
								english: "Defensive Stance"
							},
							card_text: {
								english: "Give a hero +3 Armor this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10297.283a24c6ab4b238d3005b12a9367e36ad9d86f1e.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10297_large_english.1ae2d5840dd44925acce13e9c3d818d63eb07fbc.png"
							},
							ingame_image: {},
							illustrator: "Bayard Wu",
							rarity: "Common",
							is_red: !0,
							mana_cost: 2,
							item_def: 110297,
							references: []
						}, {
							card_id: 10298,
							base_card_id: 10298,
							card_type: "Spell",
							card_name: {
								english: "Lost in Time"
							},
							card_text: {
								english: "Give three random cards in opponent's hand +3 Lock."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10298.bf7192984d8ce38adfeb51b64f132f9844d155e1.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10298_large_english.347368e170524ea786f177c8c7032dac0ae67634.png"
							},
							ingame_image: {},
							illustrator: "JiHun Lee",
							rarity: "Uncommon",
							is_blue: !0,
							mana_cost: 6,
							item_def: 110298,
							references: []
						}, {
							card_id: 10299,
							base_card_id: 10299,
							card_type: "Spell",
							card_name: {
								english: "Defend the Weak"
							},
							card_text: {
								english: 'Modify a unit with "This unit\'s allied neighbors have +2 Armor."'
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10299.7ad631f30f7bb6e1ad41e16cf942141ae0b99b3f.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10299_large_english.83b9692acb885e0a10f96b53e95974f0d40dd2a8.png"
							},
							ingame_image: {},
							illustrator: "Svetlin Velinov",
							rarity: "Uncommon",
							is_green: !0,
							mana_cost: 2,
							item_def: 110299,
							references: []
						}, {
							card_id: 10300,
							base_card_id: 10300,
							card_type: "Spell",
							card_name: {
								english: "Combat Training"
							},
							card_text: {
								english: "Modify a hero with +2 Attack."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10300.2a18454ab4d9d4c7f224370536ad0093e0710b40.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10300_large_english.d09c6a1af4ad32dddb72d5a92e9854c5f56ef92f.png"
							},
							ingame_image: {},
							illustrator: "Magali Villeneuve",
							rarity: "Common",
							is_red: !0,
							mana_cost: 3,
							item_def: 110300,
							references: []
						}, {
							card_id: 10302,
							base_card_id: 10302,
							card_type: "Spell",
							card_name: {
								english: "Self Sabotage"
							},
							card_text: {
								english: 'Modify two random cards in opponent\'s hand with " Deal 6 damage to a random allied tower in any lane."'
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10302.84152555578c231946045a125e5e00921c5fad23.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10302_large_english.8ee882eb1634037217eed90fefcb9b0584d6895d.png"
							},
							ingame_image: {},
							illustrator: "JiHun Lee",
							rarity: "Uncommon",
							is_blue: !0,
							mana_cost: 4,
							item_def: 110302,
							references: []
						}, {
							card_id: 10303,
							base_card_id: 10303,
							card_type: "Spell",
							card_name: {
								english: "Bellow"
							},
							card_text: {
								english: "Move a creep to a random other lane."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10303.69d09f5be25185944980fdeaabb477fe8beba362.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10303_large_english.51e2f29d20d0fd10830b31e82fcc75e345a4506f.png"
							},
							ingame_image: {},
							illustrator: "Forrest Imel",
							rarity: "Common",
							is_green: !0,
							mana_cost: 2,
							item_def: 110303,
							references: []
						}, {
							card_id: 10305,
							base_card_id: 10305,
							card_type: "Spell",
							card_name: {
								english: "Raze"
							},
							card_text: {
								english: "Condemn all enemy improvements."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10305.63ec42f016facf2e4f66410edd9a99186058d652.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10305_large_english.67e64c538dc9bf8bf3c0a7b2decfe93457b4c59f.png"
							},
							ingame_image: {},
							illustrator: "Mike Azevedo",
							rarity: "Rare",
							is_red: !0,
							mana_cost: 5,
							item_def: 110305,
							references: []
						}, {
							card_id: 10306,
							base_card_id: 10306,
							card_type: "Spell",
							card_name: {
								english: "Smash Their Defenses!"
							},
							card_text: {
								english: "Condemn an improvement.  Draw a card."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10306.26bb5c39cd65b31224f117dfceb15590727b07d1.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10306_large_english.4c070603254ba10595c1de7f39e1d2151085b253.png"
							},
							ingame_image: {},
							illustrator: "JiHun Lee",
							rarity: "Uncommon",
							is_red: !0,
							mana_cost: 3,
							item_def: 110306,
							references: []
						}, {
							card_id: 10307,
							base_card_id: 10307,
							card_type: "Spell",
							card_name: {
								english: "Foresight"
							},
							card_text: {
								english: "Draw 2 cards."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10307.46f3b0c17c8f6ac269cc481f4f5f6c74e8d4b9b6.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10307_large_english.2ffe9d025cfc2ec188773dd38e4cbb3a6d668399.png"
							},
							ingame_image: {},
							illustrator: "Magali Villeneuve",
							rarity: "Common",
							is_blue: !0,
							mana_cost: 4,
							item_def: 110307,
							references: []
						}, {
							card_id: 10308,
							base_card_id: 10308,
							card_type: "Spell",
							card_name: {
								english: "Coup de Grace"
							},
							card_text: {
								english: "Discard a random card. Condemn a hero."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10308.e4bec4fbb50d0feccc065c5d4bb5f7f207a67d06.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10308_large_english.5e0772f1fbb1ff55b260503d515ff7b03337abdd.png"
							},
							ingame_image: {},
							illustrator: "Greg Opalinski",
							is_black: !0,
							mana_cost: 6,
							references: []
						}, {
							card_id: 10310,
							base_card_id: 10310,
							card_type: "Creep",
							card_name: {
								english: "Horde Catapult"
							},
							card_text: {
								english: "Deal 2 piercing damage to the enemy tower before the action phase."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10310.1716e7773dd0477edce796f5a104f33c22017035.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10310_large_english.8c1735119bcc69eb9ee6c0677209ae68bfe0f1c4.png"
							},
							ingame_image: {},
							rarity: "Uncommon",
							is_black: !0,
							mana_cost: 2,
							item_def: 110310,
							hit_points: 4,
							references: []
						}, {
							card_id: 10311,
							base_card_id: 10311,
							card_type: "Spell",
							card_name: {
								english: "Arm the Rebellion"
							},
							card_text: {
								english: "Modify allied creeps with +2 Attack and +1 Armor."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10311.bfb78866eecf39a274a1f22ff6a837fdfba14b91.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10311_large_english.1d60c1bb8a70febb0832d8876b8017b3accba8f0.png"
							},
							ingame_image: {},
							illustrator: "Robert Simon",
							rarity: "Common",
							is_green: !0,
							mana_cost: 4,
							item_def: 110311,
							references: []
						}, {
							card_id: 10312,
							base_card_id: 10312,
							card_type: "Spell",
							card_name: {
								english: "Strafing Run"
							},
							card_text: {
								english: "Deal 2 damage to each enemy creep."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10312.1d44358f026daa5b62e7913b24bf5c6026b0015a.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10312_large_english.a2b7213b9d139ff99a5218a604427e809358d3fb.png"
							},
							ingame_image: {},
							illustrator: "Daarken",
							rarity: "Common",
							is_blue: !0,
							mana_cost: 1,
							item_def: 110312,
							references: []
						}, {
							card_id: 10313,
							base_card_id: 10313,
							card_type: "Spell",
							card_name: {
								english: "Poised to Strike"
							},
							card_text: {
								english: "Give a <span style='font-weight:bold;color:#c2352d;'>strength hero</span> +4 Attack this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10313.4656d7a38aea1d2479461ab3692f81bc89b8923d.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10313_large_english.4c1e0dcc97417015fe4bd3a34b6c3aca0b959486.png"
							},
							ingame_image: {},
							illustrator: "Magali Villeneuve",
							rarity: "Common",
							is_red: !0,
							mana_cost: 1,
							item_def: 110313,
							references: []
						}, {
							card_id: 10314,
							base_card_id: 10314,
							card_type: "Spell",
							card_name: {
								english: "Dirty Deeds"
							},
							card_text: {
								english: "Deal 2 damage to the enemy tower for each of its improvements."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10314.61788d7cced886c853cc99d799924f1f490edc88.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10314_large_english.c2283c0d5c647973dc5da77806ebb8d4d2c2fc54.png"
							},
							ingame_image: {},
							illustrator: "Forrest Imel",
							rarity: "Uncommon",
							is_black: !0,
							mana_cost: 3,
							item_def: 110314,
							references: []
						}, {
							card_id: 10315,
							base_card_id: 10315,
							card_type: "Spell",
							card_name: {
								english: "Annihilation"
							},
							card_text: {
								english: "Condemn all units."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10315.7cce831a3058de5aec9e0977bad2db081be117f3.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10315_large_english.2c1b20c4df067413861e860d376bb2a1fc5a9cab.png"
							},
							ingame_image: {},
							illustrator: "Titus Lunter",
							rarity: "Rare",
							is_blue: !0,
							mana_cost: 6,
							item_def: 110315,
							references: []
						}, {
							card_id: 10316,
							base_card_id: 10316,
							card_type: "Spell",
							card_name: {
								english: "Spot Weakness"
							},
							card_text: {
								english: "Give a hero and its allied neighbors Pierce this round. Draw a card."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10316.a59a98719b000276fb4292fa03e2cd896378970f.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10316_large_english.3c956b17b9237caa8feb535a8abb306893349cfe.png"
							},
							ingame_image: {},
							illustrator: "Lius Lasahido",
							rarity: "Uncommon",
							is_red: !0,
							mana_cost: 3,
							item_def: 110316,
							references: []
						}, {
							card_id: 10317,
							base_card_id: 10317,
							card_type: "Spell",
							card_name: {
								english: "Curse of Atrophy"
							},
							card_text: {
								english: "Modify enemy heroes with -2 Attack."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10317.da920ec1c119141dd35af364aa50a66a6aca68cd.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10317_large_english.9aa224cd3e3fab9fae134d154821b6c48a7d9d79.png"
							},
							ingame_image: {},
							illustrator: "Magali Villeneuve",
							rarity: "Rare",
							is_green: !0,
							mana_cost: 6,
							item_def: 110317,
							references: []
						}, {
							card_id: 10318,
							base_card_id: 10318,
							card_type: "Spell",
							card_name: {
								english: "Chain Frost"
							},
							card_text: {
								english: "Deal 3 damage to a unit. Repeat 7 times:  Deal 3 damage to a random unit to its left or right. <br><br><span style='font-weight:bold;color:#ffffff;'> Get initiative.</span>"
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10318.3a928e846d16fb7a61ccd1f92c96d3d94195a910.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10318_large_english.650671d5d4ed1f2818f3b9020a2ccc67793fe63f.png"
							},
							ingame_image: {},
							illustrator: "Wisnu Tan",
							is_black: !0,
							mana_cost: 7,
							references: []
						}, {
							card_id: 10319,
							base_card_id: 10319,
							card_type: "Spell",
							card_name: {
								english: "Diabolic Revelation"
							},
							card_text: {
								english: "Draw 2 cards. Deal 2 damage to allies in all lanes."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10319.38668948962fc5fda9888e805179c763d6746277.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10319_large_english.1d1942d75c3f4b6ad2752d2b6fb89a231266414e.png"
							},
							ingame_image: {},
							illustrator: "Jana Schirmer",
							rarity: "Uncommon",
							is_blue: !0,
							mana_cost: 1,
							item_def: 110319,
							references: []
						}, {
							card_id: 10322,
							base_card_id: 10322,
							card_type: "Spell",
							card_name: {
								english: "Payday"
							},
							card_text: {
								english: "Double your gold."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10322.4e9f787863814c8cef54b907d514ce9af6d47bd9.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10322_large_english.5b83595c379409d381f2a1e2e400b0056442b080.png"
							},
							ingame_image: {},
							illustrator: "JiHun Lee",
							rarity: "Common",
							is_black: !0,
							mana_cost: 3,
							item_def: 110322,
							references: []
						}, {
							card_id: 10323,
							base_card_id: 10323,
							card_type: "Spell",
							card_name: {
								english: "Enchant Totem"
							},
							card_text: {
								english: "Deal damage to each enemy equal to the number of enemies."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10323.1b9aff51b5c1259b7f7688338f48d1612e5477bf.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10323_large_english.8b9c4196a2dd1dd95bf6e1697a38ce221feed528.png"
							},
							ingame_image: {},
							illustrator: "Forrest Imel",
							is_blue: !0,
							mana_cost: 7,
							references: []
						}, {
							card_id: 10324,
							base_card_id: 10324,
							card_type: "Spell",
							card_name: {
								english: "Iron Branch Protection"
							},
							card_text: {
								english: "Give a unit in any lane +3 Armor until end of its next combat phase."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10324.abbf2ce92acb77c3a983c66d04d1cab323b6cb3c.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10324_large_english.56e2a253e6b1c98e1b641c77ba8330f194a92947.png"
							},
							ingame_image: {},
							illustrator: "Magali Villeneuve",
							rarity: "Uncommon",
							is_green: !0,
							mana_cost: 2,
							item_def: 110324,
							references: []
						}, {
							card_id: 10325,
							base_card_id: 10325,
							card_type: "Spell",
							card_name: {
								english: "Prey on the Weak"
							},
							card_text: {
								english: "Summon a <span style='font-weight:bold;color:#ffffff;'>Hound of War</span> for every damaged unit."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10325.5089ab12356a67542b219554cb3ad518362d3fcb.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10325_large_english.7e988d7bf392f047ec26685a8412404317939887.png"
							},
							ingame_image: {},
							illustrator: "Lake Hurwitz",
							is_blue: !0,
							mana_cost: 4,
							references: [{
									card_id: 10093,
									ref_type: "references"
								}
							]
						}, {
							card_id: 10326,
							base_card_id: 10326,
							card_type: "Spell",
							card_name: {
								english: "Enough Magic!"
							},
							card_text: {
								english: "Proceed to the combat phase."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10326.1af86cb4b6f62d613e61c3f169145bb88f24608e.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10326_large_english.2259da0c6f1e63192b94e34aa18c2ad4e8bac9f9.png"
							},
							ingame_image: {},
							illustrator: "JiHun Lee",
							rarity: "Uncommon",
							is_red: !0,
							mana_cost: 5,
							item_def: 110326,
							references: []
						}, {
							card_id: 10327,
							base_card_id: 10327,
							card_type: "Spell",
							card_name: {
								english: "Heroic Resolve"
							},
							card_text: {
								english: "Modify a <span style='font-weight:bold;color:#c2352d;'>strength hero</span> with \"After you play a non-item card costing 2 or less, modify this hero with +2 Health.\""
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10327.fa06b4c637f9d47b5725b0590e41bf52783482c1.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10327_large_english.bca6cdb1b8a7daf2a2d53e20dcbb2857976fe71b.png"
							},
							ingame_image: {},
							illustrator: "JiHun Lee",
							rarity: "Rare",
							is_red: !0,
							mana_cost: 2,
							item_def: 110327,
							references: []
						}, {
							card_id: 10328,
							base_card_id: 10328,
							card_type: "Spell",
							card_name: {
								english: "Gank"
							},
							card_text: {
								english: "Choose an <span style='font-weight:bold;color:#736e80;'>allied black hero</span>. Choose another unit in any lane. They battle each other."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10328.2c48fab7991235032df9f2df9ba74338d554d0a5.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10328_large_english.da6959ab3976d9744d29f58e62c0e6e5943ec17c.png"
							},
							ingame_image: {},
							illustrator: "Yongjae Choi",
							rarity: "Uncommon",
							is_black: !0,
							mana_cost: 4,
							item_def: 110328,
							references: []
						}, {
							card_id: 10330,
							base_card_id: 10330,
							card_type: "Spell",
							card_name: {
								english: "God's Strength"
							},
							card_text: {
								english: "Modify a <span style='font-weight:bold;color:#c2352d;'>strength hero</span> with +4 Attack."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10330.5c5f3ba2bfdcd3be22bd69c76cd9f2cfdc86291c.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10330_large_english.bec8e15a84705b8bb133bce3b4967db345861174.png"
							},
							ingame_image: {},
							illustrator: "Yongjae Choi",
							is_red: !0,
							mana_cost: 6,
							references: []
						}, {
							card_id: 10331,
							base_card_id: 10331,
							card_type: "Spell",
							card_name: {
								english: "Wrath of Gold"
							},
							card_text: {
								english: "Spend all your gold. Repeat one time for each gold spent:  Deal 4 damage to a random ally or enemy."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10331.41974bf2f68178df778274e877604753a3bf5b68.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10331_large_english.4ac0633ff57403c59f8202eb212f290ad375f93e.png"
							},
							ingame_image: {},
							illustrator: "Mike Azevedo",
							rarity: "Rare",
							is_blue: !0,
							mana_cost: 3,
							item_def: 110331,
							references: []
						}, {
							card_id: 10332,
							base_card_id: 10332,
							card_type: "Spell",
							card_name: {
								english: "Murder Plot"
							},
							card_text: {
								english: "Give a <span style='font-weight:bold;color:#736e80;'>black hero</span> +8 Attack this round. Choose a combat target for it."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10332.b26fc23429335e1db60d247ed76b646706a2b70e.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10332_large_english.a6197652d059fbabd702cef99f3b85eb70eb9ba5.png"
							},
							ingame_image: {},
							illustrator: "Kieran Yanner",
							rarity: "Uncommon",
							is_black: !0,
							mana_cost: 4,
							item_def: 110332,
							references: []
						}, {
							card_id: 10334,
							base_card_id: 10334,
							card_type: "Spell",
							card_name: {
								english: "Stars Align"
							},
							card_text: {
								english: "Give your tower +3 Mana this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10334.a811d0456917bde54c6def92dd8639ecb3718e35.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10334_large_english.895008b5f6e6e87bc675e50e485d93559889eb05.png"
							},
							ingame_image: {},
							illustrator: "John Stanko",
							rarity: "Uncommon",
							is_green: !0,
							mana_cost: 1,
							item_def: 110334,
							references: []
						}, {
							card_id: 10335,
							base_card_id: 10335,
							card_type: "Spell",
							card_name: {
								english: "Call the Reserves"
							},
							card_text: {
								english: "Summon two <span style='font-weight:bold;color:#ffffff;'>Melee Creeps</span> into any lane."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10335.0ec934ba8df2978db2c9eeba919d6dc9f0ba9875.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10335_large_english.fc0ec74b891b64a5bf30cf13c7870a0c2f607199.png"
							},
							ingame_image: {},
							illustrator: "Mike Azevedo",
							rarity: "Uncommon",
							is_blue: !0,
							mana_cost: 6,
							item_def: 110335,
							references: [{
									card_id: 1006,
									ref_type: "references"
								}
							]
						}, {
							card_id: 10336,
							base_card_id: 10336,
							card_type: "Spell",
							card_name: {
								english: "Better Late Than Never"
							},
							card_text: {
								english: "Summon a <span style='font-weight:bold;color:#ffffff;'>Melee Creep</span> into any lane."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10336.20ede0428193b56065cc1e572ca3c04d8781febf.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10336_large_english.aeb9d0a378457d53e7b3f9867ceaa3f414eb69ce.png"
							},
							ingame_image: {},
							illustrator: "Lake Hurwitz",
							rarity: "Common",
							is_blue: !0,
							mana_cost: 3,
							item_def: 110336,
							references: [{
									card_id: 1006,
									ref_type: "references"
								}
							]
						}, {
							card_id: 10338,
							base_card_id: 10338,
							card_type: "Spell",
							card_name: {
								english: "Divine Intervention"
							},
							card_text: {
								english: "Give allies Damage Immunity this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10338.b8133b409fa051a98e988459a5ead239dccc88c4.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10338_large_english.d983ed30f0d1bd479ba2cd75c02cf2c3ac5cb0fa.png"
							},
							ingame_image: {},
							illustrator: "Wisnu Tan",
							rarity: "Uncommon",
							is_green: !0,
							mana_cost: 5,
							item_def: 110338,
							references: []
						}, {
							card_id: 10339,
							base_card_id: 10339,
							card_type: "Spell",
							card_name: {
								english: "Gust"
							},
							card_text: {
								english: "Silence enemy heroes this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10339.46691b969309ffa664e02da618f9e04b632111b9.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10339_large_english.ad7737911273b9a4368330d0a79f1e0be155fd24.png"
							},
							ingame_image: {},
							illustrator: "Livia Prima",
							is_green: !0,
							mana_cost: 4,
							references: []
						}, {
							card_id: 10340,
							base_card_id: 10340,
							card_type: "Spell",
							card_name: {
								english: "Holy Persuasion"
							},
							card_text: {
								english: "Fully heal each ally. Give allies Damage Immunity this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10340.19223490c350845298c2f6cedf92f513ce74ff97.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10340_large_english.9446c030cdfc7f0617814cc23d1c97c4917b08b3.png"
							},
							ingame_image: {},
							illustrator: "Clint Cearley",
							is_green: !0,
							mana_cost: 7,
							references: []
						}, {
							card_id: 10341,
							base_card_id: 10341,
							card_type: "Spell",
							card_name: {
								english: "Duel"
							},
							card_text: {
								english: "Choose an <span style='font-weight:bold;color:#c2352d;'>allied strength hero</span> and another unit. They battle each other."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10341.80437481b6c0f9fc4bfe330865c095ac40a90cdd.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10341_large_english.6d89f3020949265c91e6a552b55b52755e91730b.png"
							},
							ingame_image: {},
							illustrator: "Bayard Wu",
							is_red: !0,
							mana_cost: 2,
							references: []
						}, {
							card_id: 10342,
							base_card_id: 10342,
							card_type: "Spell",
							card_name: {
								english: "Pick A Fight"
							},
							card_text: {
								english: "Choose an allied hero. It taunts. Choose a combat target for it."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10342.f7f50aa3a8cfdb750ba55b13d0f2bfb856c297f5.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10342_large_english.dae072fcfdf2a893ce5e16f8fda4e990e12c990c.png"
							},
							ingame_image: {},
							illustrator: "JiHun Lee",
							rarity: "Common",
							is_red: !0,
							mana_cost: 2,
							item_def: 110342,
							references: []
						}, {
							card_id: 10344,
							base_card_id: 10344,
							card_type: "Spell",
							card_name: {
								english: "Clear The Deck"
							},
							card_text: {
								english: "Give allied heroes +4 Cleave this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10344.f7adaa7a246c7f9eceabf57543926c8b28100901.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10344_large_english.a9d77adb43a5784c68555bbefb3373433c5899b3.png"
							},
							ingame_image: {},
							illustrator: "Bayard Wu",
							rarity: "Common",
							is_red: !0,
							mana_cost: 4,
							item_def: 110344,
							references: []
						}, {
							card_id: 10347,
							base_card_id: 10347,
							card_type: "Spell",
							card_name: {
								english: "Defensive Bloom"
							},
							card_text: {
								english: "Summon two <span style='font-weight:bold;color:#ffffff;'>Roseleaf Walls</span>."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10347.c561e603dc1dc01967784b4f446e1ba1d7168b08.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10347_large_english.0f470c6b09f64543ed9a2696865780af39437d4b.png"
							},
							ingame_image: {},
							illustrator: "Jana Schirmer",
							rarity: "Uncommon",
							is_green: !0,
							mana_cost: 4,
							item_def: 110347,
							references: [{
									card_id: 10120,
									ref_type: "references"
								}
							]
						}, {
							card_id: 10348,
							base_card_id: 10348,
							card_type: "Spell",
							card_name: {
								english: "Allseeing One's Favor"
							},
							card_text: {
								english: "Modify a <span style='font-weight:bold;color:#479036;'>green hero</span> with \"Allies have +2 Regeneration.\""
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10348.9e42ca383a4a13c45c0606d68ef783d5d897cb5e.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10348_large_english.f3a62d10ee87a5e3f0f92544932fbedbd53717d3.png"
							},
							ingame_image: {},
							illustrator: "Sam Carr",
							is_green: !0,
							mana_cost: 4,
							references: []
						}, {
							card_id: 10349,
							base_card_id: 10349,
							card_type: "Spell",
							card_name: {
								english: "Rising Anger"
							},
							card_text: {
								english: "Modify a <span style='font-weight:bold;color:#c2352d;'>strength hero</span> with \"After you play a non-item card costing 2 or less, modify this hero with +1 Attack.\""
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10349.be3a218ea41c6b312aa4a6340ac945505ae11139.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10349_large_english.55efae8c37b2776d9f54eb96d3869506f8ef785c.png"
							},
							ingame_image: {},
							illustrator: "JiHun Lee",
							rarity: "Rare",
							is_red: !0,
							mana_cost: 2,
							item_def: 110349,
							references: []
						}, {
							card_id: 10350,
							base_card_id: 10350,
							card_type: "Spell",
							card_name: {
								english: "Sucker Punch"
							},
							card_text: {
								english: "Stun a unit blocking an <span style='font-weight:bold;color:#c2352d;'>allied strength hero</span> this round. Deal 2 damage to that unit."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10350.b0f0140afd577696e57f0fd6c3ea43f694ced182.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10350_large_english.d571ce5f8d6df6b8af2e6652a1a6954f200e3ddf.png"
							},
							ingame_image: {},
							illustrator: "Wisnu Tan",
							rarity: "Common",
							is_red: !0,
							mana_cost: 4,
							item_def: 110350,
							references: []
						}, {
							card_id: 10352,
							base_card_id: 10352,
							card_type: "Spell",
							card_name: {
								english: "Lightning Strike"
							},
							card_text: {
								english: "Deal 6 damage to the enemy tower."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10352.a5223797348f69a3f49a070202c5f79509ee84b5.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10352_large_english.dcbf59b768ff173314b885b94a47bfe99449f74c.png"
							},
							ingame_image: {},
							illustrator: "Daniel Romanovsky",
							rarity: "Common",
							is_blue: !0,
							mana_cost: 2,
							item_def: 110352,
							references: []
						}, {
							card_id: 10353,
							base_card_id: 10353,
							card_type: "Spell",
							card_name: {
								english: "Bolt of Damocles"
							},
							card_text: {
								english: "Deal 20 damage to the enemy tower."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10353.d7bccf0e740458f183286c929e3de7b16966f81b.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10353_large_english.775dfa49c08a448782611cc7cfef3556ebfcea72.png"
							},
							ingame_image: {},
							illustrator: "Daniel Romanovsky",
							rarity: "Rare",
							is_blue: !0,
							mana_cost: 10,
							item_def: 110353,
							references: []
						}, {
							card_id: 10354,
							base_card_id: 10354,
							card_type: "Spell",
							card_name: {
								english: "Pick Off"
							},
							card_text: {
								english: "Deal 4 damage to a unit in any lane."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10354.3d3929d8af8f02aab24a0c8b8aee77bdc6497e6d.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10354_large_english.19a1bf4ee88023809989fd79efa8695a09bf0c3d.png"
							},
							ingame_image: {},
							illustrator: "Randy Vargas",
							rarity: "Uncommon",
							is_black: !0,
							mana_cost: 4,
							item_def: 110354,
							references: []
						}, {
							card_id: 10355,
							base_card_id: 10355,
							card_type: "Spell",
							card_name: {
								english: "Dimensional Portal"
							},
							card_text: {
								english: "Summon three <span style='font-weight:bold;color:#ffffff;'>Melee Creeps</span>."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10355.fc832e69bc15df06010fda36437284a640b7e940.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10355_large_english.30afa8d28cfaec0f2999542967407d9400b435da.png"
							},
							ingame_image: {},
							illustrator: "Svetlin Velinov",
							rarity: "Common",
							is_blue: !0,
							mana_cost: 4,
							item_def: 110355,
							references: [{
									card_id: 1006,
									ref_type: "references"
								}
							]
						}, {
							card_id: 10358,
							base_card_id: 10358,
							card_type: "Spell",
							card_name: {
								english: "Restoration Effort"
							},
							card_text: {
								english: "Heal your tower 8."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10358.bca14ce73953f0f9c94d77b21084123aa6cd1aa9.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10358_large_english.0d3cc769e9fefe5b103625ebf89d65e00d77f745.png"
							},
							ingame_image: {},
							illustrator: "Darkken",
							rarity: "Uncommon",
							is_green: !0,
							mana_cost: 4,
							item_def: 110358,
							references: []
						}, {
							card_id: 10359,
							base_card_id: 10359,
							card_type: "Spell",
							card_name: {
								english: "Buying Time"
							},
							card_text: {
								english: "Give two random cards in opponent's hand +2 Lock."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10359.4bf50048b5904b00d49334d7089433f2b268564c.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10359_large_english.227ddf5833578656d68067c57fec82a1da2bae03.png"
							},
							ingame_image: {},
							illustrator: "Sung Choi",
							rarity: "Common",
							is_blue: !0,
							mana_cost: 3,
							item_def: 110359,
							references: []
						}, {
							card_id: 10360,
							base_card_id: 10360,
							card_type: "Spell",
							card_name: {
								english: "Friendly Fire"
							},
							card_text: {
								english: "Choose two enemies. They battle each other."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10360.6571baf44a01bd62985c1d2d07f2a93b6351f7f2.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10360_large_english.37fde533bfd2437750b232499850be8a4fe4cf84.png"
							},
							ingame_image: {},
							illustrator: "Darek Zabrocki",
							rarity: "Uncommon",
							is_blue: !0,
							mana_cost: 6,
							item_def: 110360,
							references: []
						}, {
							card_id: 10361,
							base_card_id: 10361,
							card_type: "Spell",
							card_name: {
								english: "Coordinated Assault"
							},
							card_text: {
								english: "Modify a <span style='font-weight:bold;color:#736e80;'>black hero</span> with \"After you play a <span style='font-weight:bold;color:#736e80;'>black card</span>, give this hero and its allied neighbors +2 Attack this round.\""
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10361.f48c6445bbb1bd5c5266b73ac261f8835df980b7.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10361_large_english.72899919ffad3de26d40dec193b584c7f160d957.png"
							},
							ingame_image: {},
							illustrator: "Wisnu Tan",
							rarity: "Rare",
							is_black: !0,
							mana_cost: 4,
							item_def: 110361,
							references: []
						}, {
							card_id: 10365,
							base_card_id: 10365,
							card_type: "Spell",
							card_name: {
								english: "Juke"
							},
							card_text: {
								english: "Swap an ally with one of its allied neighbors."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10365.b39b61928fa8f460ccd51c1e555aba01bce551fd.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10365_large_english.3b4ce16ca813a4f779bcca528c0dda8e6ee2ff6d.png"
							},
							ingame_image: {},
							illustrator: "Forrest Imel",
							rarity: "Common",
							is_green: !0,
							mana_cost: 1,
							item_def: 110365,
							references: []
						}, {
							card_id: 10366,
							base_card_id: 10366,
							card_type: "Spell",
							card_name: {
								english: "New Orders"
							},
							card_text: {
								english: "Choose an ally. Choose a combat target for it."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10366.3d9a3af9ab3a2e64e3bb7199395e77f5dcc48d41.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10366_large_english.e3af7306e16511e9e763e12cab347a3d660621c7.png"
							},
							ingame_image: {},
							illustrator: "Robert Simon",
							rarity: "Common",
							is_red: !0,
							mana_cost: 1,
							item_def: 110366,
							references: []
						}, {
							card_id: 10367,
							base_card_id: 10367,
							card_type: "Spell",
							card_name: {
								english: "Rend Armor"
							},
							card_text: {
								english: "Modify a unit with -X Armor where X is its Armor."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10367.d93c935bb2152fc90b6b3c3abf78a948f92e9349.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10367_large_english.fea231d0a92b9d57b23f4ace0bb89d3f0a54e487.png"
							},
							ingame_image: {},
							illustrator: "Forrest Imel",
							rarity: "Uncommon",
							is_red: !0,
							mana_cost: 3,
							item_def: 110367,
							references: []
						}, {
							card_id: 10368,
							base_card_id: 10368,
							card_type: "Spell",
							card_name: {
								english: "Avernus' Blessing"
							},
							card_text: {
								english: "Modify a unit with +2 Attack."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10368.865d9ad6bec7c4c415502ddad7d12242808a0ed2.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10368_large_english.e62e8cc8c75443f05fd300e49df33d39571e38f2.png"
							},
							ingame_image: {},
							illustrator: "Livia Prima",
							rarity: "Common",
							is_green: !0,
							mana_cost: 3,
							item_def: 110368,
							references: []
						}, {
							card_id: 10370,
							base_card_id: 10370,
							card_type: "Spell",
							card_name: {
								english: "Fight Through The Pain"
							},
							card_text: {
								english: "Give a <span style='font-weight:bold;color:#c2352d;'>strength hero</span> +2 Armor this round. <br><br><span style='font-weight:bold;color:#ffffff;'> Get initiative.</span>"
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10370.a9b5d8f57e407984b88a870def881cd69d2f3538.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10370_large_english.55fe499491aa013093e4730c3d4a247d1844edfc.png"
							},
							ingame_image: {},
							illustrator: "Forrest Imel",
							rarity: "Common",
							is_red: !0,
							mana_cost: 1,
							item_def: 110370,
							references: []
						}, {
							card_id: 10373,
							base_card_id: 10373,
							card_type: "Spell",
							card_name: {
								english: "Soul of Spring"
							},
							card_text: {
								english: "Modify a hero with \"After you play a <span style='font-weight:bold;color:#479036;'>green card</span>, give this hero and its allied neighbors +4 Regeneration this round.\""
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10373.f6bc4347b641383661aff4635d1142ff14801f0e.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10373_large_english.1ebb884889fae863cd65f93844da11ce82675d21.png"
							},
							ingame_image: {},
							illustrator: "Jana Schirmer",
							rarity: "Rare",
							is_green: !0,
							mana_cost: 4,
							item_def: 110373,
							references: []
						}, {
							card_id: 10374,
							base_card_id: 10374,
							card_type: "Spell",
							card_name: {
								english: "Arcane Assault"
							},
							card_text: {
								english: "Deal 2 damage to the enemy tower. Draw a card. <br><br><span style='font-weight:bold;color:#ffffff;'> Get initiative.</span>"
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10374.f129956892b1e01960fec7307094250f4744aaeb.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10374_large_english.4bd08846bd99eeb24f81dfc4aaad3c178115922f.png"
							},
							ingame_image: {},
							illustrator: "Alix Branwyn",
							rarity: "Common",
							is_blue: !0,
							mana_cost: 4,
							item_def: 110374,
							references: []
						}, {
							card_id: 10376,
							base_card_id: 10376,
							card_type: "Spell",
							card_name: {
								english: "Remote Detonation"
							},
							card_text: {
								english: "Deal 5 damage to each enemy across from an empty combat position."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10376.a1b3a436b85ab6ae46481d43441fa5ad39de0344.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10376_large_english.93282cfbeacd27d3dbe8cdb9bf4b7e6bd07f12f9.png"
							},
							ingame_image: {},
							illustrator: "Jason Kang",
							rarity: "Rare",
							is_blue: !0,
							mana_cost: 6,
							item_def: 110376,
							references: []
						}, {
							card_id: 10377,
							base_card_id: 10377,
							card_type: "Spell",
							card_name: {
								english: "Fog of War"
							},
							card_text: {
								english: "Each enemy has a 50% chance of being disarmed this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10377.e4c3b7cd06e340fbd35ab9a5bab1522f7434c188.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10377_large_english.79b4dddfa77beaea0043c4195b00da4797b2f1a8.png"
							},
							ingame_image: {},
							illustrator: "Magali Villeneuve",
							rarity: "Rare",
							is_blue: !0,
							mana_cost: 4,
							item_def: 110377,
							references: []
						}, {
							card_id: 10378,
							base_card_id: 10378,
							card_type: "Spell",
							card_name: {
								english: "Divine Purpose"
							},
							card_text: {
								english: "Modify a unit with Damage Immunity."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10378.8880062f7c7eaf135cc7dee606352181e205f7d6.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10378_large_english.658ea40c366162a6fc90acfea2296124a18e98b0.png"
							},
							ingame_image: {},
							illustrator: "Kieran Yanner",
							rarity: "Rare",
							is_green: !0,
							mana_cost: 7,
							item_def: 110378,
							references: []
						}, {
							card_id: 10379,
							base_card_id: 10379,
							card_type: "Spell",
							card_name: {
								english: "Intimidation"
							},
							card_text: {
								english: "Move a unit to a random other lane."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10379.ae6d727768728614ced8761010e8eda568a19545.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10379_large_english.0b59dcae39c2f74947d6a20ea0c9d06fd15fba91.png"
							},
							ingame_image: {},
							illustrator: "Bayard Wu",
							rarity: "Common",
							is_green: !0,
							mana_cost: 5,
							item_def: 110379,
							references: []
						}, {
							card_id: 10382,
							base_card_id: 10382,
							card_type: "Spell",
							card_name: {
								english: "Cleansing Rite"
							},
							card_text: {
								english: "Purge your opponent's effects from a hero."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10382.5b6404391d4356514dcd8e4f9556a7356021a7b3.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10382_large_english.80fff181f47536e98898c7bba28f47d77b25fd98.png"
							},
							ingame_image: {},
							illustrator: "John Stanko",
							rarity: "Uncommon",
							is_green: !0,
							mana_cost: 4,
							item_def: 110382,
							references: []
						}, {
							card_id: 10385,
							base_card_id: 10385,
							card_type: "Spell",
							card_name: {
								english: "Tresdin's Standards"
							},
							card_text: {
								english: "Modify a <span style='font-weight:bold;color:#c2352d;'>strength hero</span> with \"After you play a <span style='font-weight:bold;color:#c2352d;'>red card</span>, give this hero and its allied neighbors +1 Attack and +1 Armor this round.\""
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10385.2299e7fa03a59a1d9def5c4b6906e44b115d79c0.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10385_large_english.88bba3e1c8757c5aac689d985d65c3cdb7093d84.png"
							},
							ingame_image: {},
							illustrator: "James Paick",
							rarity: "Rare",
							is_red: !0,
							mana_cost: 4,
							item_def: 110385,
							references: []
						}, {
							card_id: 10391,
							base_card_id: 10391,
							card_type: "Spell",
							card_name: {
								english: "Compel"
							},
							card_text: {
								english: "Choose a unit. Choose a combat target for it. Draw a card."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10391.f840d1c14095da76ca4cbedf2e54289052862bf8.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10391_large_english.da63bfaed28c0b05f81b3fcee1a2cde58eb11034.png"
							},
							ingame_image: {},
							illustrator: "Lake Hurwitz",
							rarity: "Uncommon",
							is_blue: !0,
							mana_cost: 3,
							item_def: 110391,
							references: []
						}, {
							card_id: 10396,
							base_card_id: 10396,
							card_type: "Spell",
							card_name: {
								english: "Caught Unprepared"
							},
							card_text: {
								english: "Stun a hero until they equip an item."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10396.b91d37f5c3d3f4d6a15fb69e30407f4338ebb2a0.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10396_large_english.95253b00d104f8ad9151862871b40d126e74ad19.png"
							},
							ingame_image: {},
							illustrator: "Forrest Imel",
							rarity: "Rare",
							is_green: !0,
							mana_cost: 4,
							item_def: 110396,
							references: []
						}, {
							card_id: 10399,
							base_card_id: 10399,
							card_type: "Spell",
							card_name: {
								english: "Relentless Pursuit"
							},
							card_text: {
								english: "Choose a unit in another lane. Move a random <span style='font-weight:bold;color:#736e80;'>allied black hero</span> from this lane to that lane.  Deal 2 damage to the chosen unit."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10399.e961f9fbc345c39e0e7775f73a98295794a0ffab.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10399_large_english.b802f5907394dfd6ada95a35cd1d0d10881a9bbc.png"
							},
							ingame_image: {},
							illustrator: "Stepan Alekseev",
							rarity: "Uncommon",
							is_black: !0,
							mana_cost: 1,
							item_def: 110399,
							references: []
						}, {
							card_id: 10402,
							base_card_id: 10402,
							card_type: "Spell",
							card_name: {
								english: "Tower Barrage"
							},
							card_text: {
								english: "Deal 2 damage to each enemy."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10402.f3892dece66264241cf9e3f7f79cf074a5e8b507.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10402_large_english.fd166460a43955e6ee1d4899239e9523f2838ffa.png"
							},
							ingame_image: {},
							illustrator: "JiHun Lee",
							rarity: "Common",
							is_blue: !0,
							mana_cost: 3,
							item_def: 110402,
							references: []
						}, {
							card_id: 10403,
							base_card_id: 10403,
							card_type: "Spell",
							card_name: {
								english: "Steal Strength"
							},
							card_text: {
								english: "Give a unit -4 Attack this round and give another unit +4 Attack this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10403.fe81c6a86cb1d4169ae6ff88a93a2e2a25d81639.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10403_large_english.0cd9ca42bc7bdb74b005fd9435a40fbc33e25588.png"
							},
							ingame_image: {},
							illustrator: "Darek Zabrocki",
							rarity: "Uncommon",
							is_green: !0,
							mana_cost: 4,
							item_def: 110403,
							references: []
						}, {
							card_id: 10404,
							base_card_id: 10404,
							card_type: "Spell",
							card_name: {
								english: "The Cover of Night"
							},
							card_text: {
								english: "Move an <span style='font-weight:bold;color:#736e80;'>allied black hero</span> to another lane. Give that hero +4 Attack and +7 Siege until end of its next combat phase."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10404.917a223c290db560b84fd6dc9cb0ef81c8f923de.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10404_large_english.18afea4381c3df667c22e01cb1c898b8502b504f.png"
							},
							ingame_image: {},
							illustrator: "Michael Kommark",
							rarity: "Rare",
							is_black: !0,
							mana_cost: 7,
							item_def: 110404,
							references: []
						}, {
							card_id: 10410,
							base_card_id: 10410,
							card_type: "Spell",
							card_name: {
								english: "Slay"
							},
							card_text: {
								english: "Condemn a creep."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10410.46b3dbd57f450f80339cb519a4ead130fa1b9f15.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10410_large_english.34a45701ad318796afda066959b47a102799fc56.png"
							},
							ingame_image: {},
							illustrator: "Jana Schirmer",
							rarity: "Common",
							is_black: !0,
							mana_cost: 3,
							item_def: 110410,
							references: []
						}, {
							card_id: 10411,
							base_card_id: 10411,
							card_type: "Spell",
							card_name: {
								english: "Cunning Plan"
							},
							card_text: {
								english: "Swap a unit with one of its allied neighbors. Draw a card."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10411.b368e1c356b807b14e8f9b5caa0520952665a1ba.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10411_large_english.c26b01a1216b4854ccfbba1b75acb100810d996a.png"
							},
							ingame_image: {},
							illustrator: "Bayard Wu",
							rarity: "Common",
							is_blue: !0,
							mana_cost: 2,
							item_def: 110411,
							references: []
						}, {
							card_id: 10412,
							base_card_id: 10412,
							card_type: "Spell",
							card_name: {
								english: "Thunderstorm"
							},
							card_text: {
								english: "Deal 4 damage to each enemy."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10412.f5c858ae960e7673a205aad44234446302aff52b.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10412_large_english.aa7a7971d4b7e54d6249eb58eb7882aac339cb35.png"
							},
							ingame_image: {},
							illustrator: "James Paick",
							rarity: "Uncommon",
							is_blue: !0,
							mana_cost: 6,
							item_def: 110412,
							references: []
						}, {
							card_id: 10413,
							base_card_id: 10413,
							card_type: "Spell",
							card_name: {
								english: "Forward Charge"
							},
							card_text: {
								english: "Give allies +2 Siege this round. Allies change their combat target to the unit or tower across from them."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10413.c46d017872b543a8efdad0216390aa5c042bea76.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10413_large_english.9ee0b07dd5ee25e09db9aeef6b0e77092c2232f8.png"
							},
							ingame_image: {},
							illustrator: "Darek Zabrocki",
							rarity: "Uncommon",
							is_black: !0,
							mana_cost: 3,
							item_def: 110413,
							references: []
						}, {
							card_id: 10415,
							base_card_id: 10415,
							card_type: "Spell",
							card_name: {
								english: "Collateral Damage"
							},
							card_text: {
								english: "Modify a <span style='font-weight:bold;color:#736e80;'>black hero</span> with +3 Siege."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10415.a6305f5512db64444a0c194ba0ccdc2344db5982.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10415_large_english.9dcf2c81dbe165710f3f3ffd6a520d96dedec638.png"
							},
							ingame_image: {},
							illustrator: "JiHun Lee",
							rarity: "Common",
							is_black: !0,
							mana_cost: 4,
							item_def: 110415,
							references: []
						}, {
							card_id: 10416,
							base_card_id: 10416,
							card_type: "Spell",
							card_name: {
								english: "Track"
							},
							card_text: {
								english: "Give a hero +10 Bounty until it dies."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10416.8f88364e5965d259e430f6fb7ad5dbf2b94f4897.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10416_large_english.644b02c34bce106e135b0b9533d169dd83482ad5.png"
							},
							ingame_image: {},
							illustrator: "E.M. Gist",
							is_black: !0,
							mana_cost: 3,
							references: []
						}, {
							card_id: 10417,
							base_card_id: 10417,
							card_type: "Spell",
							card_name: {
								english: "Spring the Trap"
							},
							card_text: {
								english: "Summon two <span style='font-weight:bold;color:#ffffff;'>Centaur Hunters</span> into any lane."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10417.3bb06854667838b027dad31132cbad624db632aa.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10417_large_english.e8e68c68ba82cb77e5b1b85e553f0fce0746afa9.png"
							},
							ingame_image: {},
							illustrator: "James Paick",
							rarity: "Rare",
							is_red: !0,
							mana_cost: 7,
							item_def: 110417,
							references: [{
									card_id: 10082,
									ref_type: "references"
								}
							]
						}, {
							card_id: 10418,
							base_card_id: 10418,
							card_type: "Spell",
							card_name: {
								english: "Ventriloquy"
							},
							card_text: {
								english: "Choose a unit. It taunts."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10418.49e5b7a64bab65e273790967eefbe6519834b1be.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10418_large_english.6a5a86fa8cca485e719dae42553186a5d26be7da.png"
							},
							ingame_image: {},
							illustrator: "Daarken",
							rarity: "Common",
							is_blue: !0,
							mana_cost: 1,
							item_def: 110418,
							references: []
						}, {
							card_id: 10419,
							base_card_id: 10419,
							card_type: "Spell",
							card_name: {
								english: "Viscous Nasal Goo"
							},
							card_text: {
								english: "Modify a unit with -2 Armor."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10419.a0f45edfd1ce9f4c5a4b76aabef2cd1547c97b3c.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10419_large_english.0b0a651493969a1fbed8fc5033910a6a740cac49.png"
							},
							ingame_image: {},
							illustrator: "JiHun Lee",
							is_red: !0,
							mana_cost: 4,
							references: []
						}, {
							card_id: 10420,
							base_card_id: 10420,
							card_type: "Spell",
							card_name: {
								english: "Act of Defiance"
							},
							card_text: {
								english: "Silence a unit this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10420.db2bf2627a080daf9e0450d6a31c900b399c691f.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10420_large_english.bcf010fa08f4f59c1c63b84089cec4e3dd568534.png"
							},
							ingame_image: {},
							illustrator: "Chris Rahn",
							is_green: !0,
							mana_cost: 5,
							references: []
						}, {
							card_id: 10421,
							base_card_id: 10421,
							card_type: "Spell",
							card_name: {
								english: "Crippling Blow"
							},
							card_text: {
								english: "Modify a hero with -2 Attack."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10421.e6a42fc87173f4164243d57a45cf89d8a358d5b7.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10421_large_english.42b33c8512458ad39321d71776ed9676aefcdf14.png"
							},
							ingame_image: {},
							illustrator: "Daarken",
							rarity: "Common",
							is_red: !0,
							mana_cost: 4,
							item_def: 110421,
							references: []
						}, {
							card_id: 10422,
							base_card_id: 10422,
							card_type: "Spell",
							card_name: {
								english: "Whispers of Madness"
							},
							card_text: {
								english: "Stun an enemy this round and stun allied heroes in all lanes this round."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10422.9018863f6be78374fece2b22128e8852758f403b.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10422_large_english.7d3e2a225b140edf0c2a6d180a2f2307bed5c500.png"
							},
							ingame_image: {},
							illustrator: "Daarken",
							rarity: "Rare",
							is_blue: !0,
							mana_cost: 2,
							item_def: 110422,
							references: []
						}, {
							card_id: 10424,
							base_card_id: 10424,
							card_type: "Spell",
							card_name: {
								english: "At Any Cost"
							},
							card_text: {
								english: "Deal 6 damage to every unit."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10424.7244d7e2675379a410e7345ccdc2f7a5a3f3e1f1.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10424_large_english.304c0880cae0475eabac02fd04a338c091f7a007.png"
							},
							ingame_image: {},
							illustrator: "Livia Prima",
							rarity: "Rare",
							is_blue: !0,
							mana_cost: 3,
							item_def: 110424,
							references: []
						}, {
							card_id: 10425,
							base_card_id: 10425,
							card_type: "Spell",
							card_name: {
								english: "Time of Triumph"
							},
							card_text: {
								english: "Modify allied heroes with +4 Attack, +4 Armor, +4 Health, +4 Cleave, +4 Retaliate, and +4 Siege."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10425.29bba0f40f9f65b3e7dc0233da209bdbc4a8742a.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10425_large_english.d64f63a10aace03cf69d0eab468730febaf4e4da.png"
							},
							ingame_image: {},
							illustrator: "Darek Zabrocki",
							rarity: "Rare",
							is_red: !0,
							mana_cost: 8,
							item_def: 110425,
							references: []
						}, {
							card_id: 10536,
							base_card_id: 10536,
							card_type: "Hero",
							card_name: {
								english: "Storm Spirit"
							},
							card_text: {},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10536.f29d6a820bf65991ea122a1efdb61088651d2706.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10536_large_english.2a3c675f8be6bd7ca782951790cfe80880b6cc7b.png"
							},
							ingame_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10536_ingame.0c88cb2ca6dcdab778a528e716d39210ed46c618.png"
							},
							illustrator: "JiHun Lee",
							rarity: "Rare",
							is_black: !0,
							item_def: 110536,
							attack: 4,
							hit_points: 6,
							references: [{
									card_id: 10538,
									ref_type: "includes",
									count: 3
								}, {
									card_id: 10537,
									ref_type: "passive_ability"
								}
							]
						}, {
							card_id: 10537,
							base_card_id: 10537,
							card_type: "Passive Ability",
							card_name: {
								english: "Overload"
							},
							card_text: {
								english: "Give Storm Spirit +2 Attack until end of its next combat phase after you play a <span style='font-weight:bold;color:#736e80;'>black card</span> in any lane."
							},
							mini_image: {},
							large_image: {},
							ingame_image: {},
							references: []
						}, {
							card_id: 10538,
							base_card_id: 10538,
							card_type: "Spell",
							card_name: {
								english: "Static Remnant"
							},
							card_text: {
								english: "Move an <span style='font-weight:bold;color:#736e80;'>allied black hero</span> to an empty combat position in any lane."
							},
							mini_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10538.aeb7a6a47e1d8b1a26307ae25e329df3e3bb0843.png"
							},
							large_image: {
							default:
								"https://steamcdn-a.akamaihd.net/apps/583950/icons/set01/10538_large_english.9b39d2d2bb4769b68fa3ac42abee35b1685a57de.png"
							},
							ingame_image: {},
							illustrator: "JiHun Lee",
							is_black: !0,
							mana_cost: 3,
							references: []
						}
					]
				}
			};
			t.d(a, "game", function () {
				return J
			}),
			t.d(a, "cardData", function () {
				return V
			}),
			t.d(a, "posAvail", function () {
				return K
			}),
			t.d(a, "battle", function () {
				return z
			}),
			t.d(a, "itemDeck", function () {
				return Q
			}),
			t.d(a, "secretShopDeck", function () {
				return ae
			});
			let V = "not loaded yet";
			!function (e) {
				var a = new XMLHttpRequest;
				a.overrideMimeType("application/json"),
				a.open("GET", "../node_modules/artifactdb/cards-manifest.json", !0),
				a.onreadystatechange = function () {
					4 == a.readyState && "200" == a.status && e(a.responseText)
				},
				a.send(null)
			}
			(function (e) {
				V = JSON.parse(e).Sets[0]
			});
			const q = (e, a) => {
				e = [e];
				let t = document.createElement("div"),
				n = document.createElement("span");
				n.textContent = i(e);
				let r = document.createElement("div");
				t.appendChild(r),
				t.appendChild(n),
				r.classList.add("mana");
				let s = !1,
				d = [3, 3];
				r.textContent = `${d[0]} : ${d[1]}`;
				setTimeout(function () {
					u.lanes[a].div.addEventListener("endOfRound", function () {
						c.mana[1] += 1,
						c.manaDiv.textContent = `${c.mana[0]} : ${c.mana[1]}`,
						d[0] = d[1],
						c.manaDiv.textContent = `${d[0]} : ${d[1]}`
					})
				}, 10);
				let c = {
					currentHealth: e,
					div: t,
					Name: "tower",
					currentArmor: [0],
					mana: d,
					manaDiv: r,
					updateDisplay: () => {
						i(c.currentHealth) <= 0 && (J.score[1 - a] += 1, s || (s = !s, c.currentHealth = [80], t.classList.add("ancient"))),
						n.textContent = i(c.currentHealth),
						c.manaDiv.textContent = `${c.mana[0]} : ${c.mana[1]}`
					}
				};
				return c
			},
			O = (e, a, t, i, r = !1) => {
				let s = {};
				return (t = t.map(function (e) {
							return E(V.Cards.find(function (a) {
									return a.Name == e
								}), s)
						}))[3].respawn = 1,
				t[4].respawn = 2,
				n(i),
				s.turn = e,
				s.handDiv = e ? document.getElementById("hand-top") : document.getElementById("hand-bottom"),
				s.hand = [],
				s.draw = (() => {
					let e = i.shift();
					if (null != e) {
						let a = E(V.Cards.find(function (a) {
									return a.Name == e
								}), s);
						s.hand.push(a),
						s.handDiv.appendChild(a.div)
					}
				}),
				s.getHeros = (() => t),
				s.name = a,
				s.computer = r,
				s.gold = 0,
				s
			},
			J = (() => {
				const e = document.getElementById("game");
				let a,
				t = [0, 1],
				n = Math.random() < .5,
				r = 0,
				s = 0,
				d = [0, 0];
				let c = new CustomEvent("afterCombat", {
						detail: {
							lane: void 0,
							card: void 0,
							player: void 0
						}
					}),
				l = new CustomEvent("endOfRound", {
						detail: {
							lane: void 0,
							card: void 0,
							player: void 0
						}
					}),
				o = new CustomEvent("continuousRefresh", {
						detail: {
							lane: void 0,
							card: void 0,
							player: void 0
						}
					}),
				m = new CustomEvent("continuousEffect", {
						detail: {
							lane: void 0,
							card: void 0,
							player: void 0
						}
					}),
				p = new CustomEvent("whenAttacking", {
						detail: {
							lane: void 0,
							card: void 0,
							player: void 0
						}
					}),
				g = new CustomEvent("beforeTheActionPhase", {
						detail: {
							lane: void 0,
							card: void 0,
							player: void 0
						}
					}),
				_ = new CustomEvent("afterUnitDies", {
						detail: {
							lane: void 0,
							card: void 0,
							player: void 0,
							triggerLane: void 0,
							triggerCard: void 0,
							triggerPlayer: void 0
						}
					});
				function h(e, a, t, n) {
					let i = {
						afterCombat: e => {
							if (e == s)
								return c
						},
						endOfRound: e => l,
						beforeTheActionPhase: e => {
							if (e == s)
								return g
						},
						continuousRefresh: e => o,
						_continuousEffect: e => m,
						whenAttacking: e => {
							if (e == s)
								return p
						},
						afterUnitDies: e => {
							if (e == s)
								return _
						}
					};
					u.lanes.forEach(function (r, s) {
						let d = i[e](s);
						null != d && (t && Object.assign(d.detail, {
								triggerLane: a,
								triggerCard: t,
								triggerPlayer: n
							}), d.detail.lane = s, r.cards.forEach(function (e, a) {
								d.detail.card = a,
								e.forEach(function (e, a) {
									null != e.Name && (d.detail.player = a, e.div.dispatchEvent(d), "Hero" == e.CardType && (e.Accessory && (e.Accessory.div.dispatchEvent(d), e.Accessory.updateDisplay()), e.Armor && (e.Armor.div.dispatchEvent(d), e.Armor.updateDisplay()), e.Weapon && (e.Weapon.div.dispatchEvent(d), e.Weapon.updateDisplay())), e.updateDisplay())
								})
							}), null != d && r.div.dispatchEvent(d), r.improvements.forEach(function (e, a) {
								d.detail.player = a,
								e.forEach(function (e, a) {
									d.detail.card = a,
									e.div.dispatchEvent(d),
									e.updateDisplay()
								})
							}))
					}),
					"continuousRefresh" == e && h("_continuousEffect"),
					"endOfRound" == e && J.players.forEach(function (a, t) {
						a.getHeros().forEach(function (a) {
							let n = i[e]();
							n.detail.player = t,
							n.detail.lane = null,
							a.respawn >= 0 && a.div.dispatchEvent(n)
						})
					})
				}
				function b(e = !1) {
					n = 1 - n,
					e || (u.lanes[s].passCount = 0),
					D.enable(),
					S.enable(),
					u.lanes[s].collapse(!1),
					u.lanes[s].expand(),
					t[n].computer && setTimeout(function () {
						f.actionPhase(t[n])
					}, 300)
				}
				return {
					div: e,
					getCurrentLane: () => s,
					startGame: () => {
						console.log("Game Started"),
						t[0] = O(0, "Radiant", Z, j),
						t[1] = O(1, "Dire", Y, X, !0),
						function () {
							let e = ["left-lane", "middle-lane", "right-lane"],
							a = ["bottom", "top"];
							u.lanes.forEach(function (t, n) {
								t.name = e[n],
								t.div.classList.add("lane", e[n]),
								u.div.appendChild(t.div);
								for (var i = 1; i >= 0; i--)
									t.playAreas[i] = document.createElement("div"), t.playAreas[i].classList.add("playarea", `playarea-${a[i]}`), t.towers[i] = q(40, i), t.towers[i].div.classList.add("tower", `tower-${a[i]}`), t.div.appendChild(t.playAreas[i]), t.div.appendChild(t.towers[i].div), t.stages[i] = document.createElement("div"), t.stages[i].classList.add("stage", `stage-${a[i]}`, "display-none"), t.div.appendChild(t.stages[i]);
								t.playAreas[1].addEventListener("scroll", function () {
									t.playAreas[0].scrollLeft = t.playAreas[1].scrollLeft
								}),
								t.playAreas[0].addEventListener("scroll", function () {
									t.playAreas[1].scrollLeft = t.playAreas[0].scrollLeft
								})
							})
						}
						(),
						a = W(),
						u.lanes[s].div.classList.add("active"),
						P(),
						J.players.forEach(function (e) {
							for (var a = 0; a < 3; a++)
								e.draw()
						}),
						S.initialize(),
						D.enable(),
						x.updateActive()
					},
					getRound: () => r,
					score: d,
					gameOver: () => !(d[0] < 2 && d[1] < 2 || (d[0] >= 2 && d[1] >= 2 ? alert("Tie Game") : d[0] >= 2 ? alert(`${t[0].name} Wins`) : d[1] >= 2 && alert(`DEFErunT : ${t[1].name} Wins`), D.hide(), 0)),
					getTurn: () => n,
					nextTurn: b,
					pass: () => {
						u.lanes[s].passCount += 1,
						u.lanes[s].passCount > 1 ? (function () {
							let e = u.lanes[J.getCurrentLane()];
							J.dispatchEvent("whenAttacking"),
							e.cards.forEach(function (a, t) {
								a.forEach(function (a, n) {
									if (null != a.Name && !a.disarmed) {
										let s = e.cards[t + a.arrow][1 - n];
										if (null == s || null == s.Name)
											s = e.towers[1 - n];
										else if (i(s.retaliate) > 0 && (a.currentHealth[0] -= i(s.retaliate) - i(a.currentArmor)), i(a.siege) > 0 && (e.towers[1 - n].currentHealth[0] -= i(a.siege)), i(a.cleave) > 0)
											for (var r = -1; r < 2; r += 2) {
												let s = e.cards[t + a.arrow + r];
												null != s && null != (s = e.cards[t + a.arrow + r][1 - n]) && null != s.Name && (s.currentHealth[0] -= i(a.cleave) - i(s.currentArmor))
											}
										s.currentHealth[0] -= i(a.currentAttack) - i(s.currentArmor)
									}
								}),
								a.forEach(function (e, a) {
									null != e.Name && (i(e.regen) > 0 && (e.currentHealth[0] += i(e.regen)), e.currentHealth[0] > e.Health && (e.currentHealth[0] = e.Health))
								})
							}),
							u.collapse(),
							e.towers[1].updateDisplay(),
							e.towers[0].updateDisplay(),
							J.dispatchEvent("afterCombat"),
							J.infoDisplayUpdate(),
							J.gameOver()
						}
							(), u.lanes[s].div.classList.remove("active"), (s += 1) > 2 ? (D.hide(), S.hide(), N.show(), t[0].computer && f.shop(0), t[1].computer && f.shop(1), h("endOfRound"), s = 0, r += 1) : (b(), h("beforeTheActionPhase")), u.lanes[s].div.classList.add("active"), x.updateActive()) : b(!0)
					},
					condemn: (e, a) => {
						let t = a.cards.flat().indexOf(e),
						n = w(u.lanes.indexOf(a));
						h("afterUnitDies", u.lanes.indexOf(a), Math.floor(t / 2), t % 2),
						e.div.classList.add("condemned"),
						e.div.parentNode.replaceChild(n.div, e.div),
						a.cards[Math.floor(t / 2)][t % 2] = n,
						e.player == J.players[0] ? J.players[1].gold += e.Bounty : J.players[0].gold += e.Bounty,
						null != e.respawn && (e.respawn = 1, e.currentHealth[0] = e.Health, e.updateDisplay())
					},
					players: t,
					extraDeploy: [[[], [], []], [[], [], []]],
					infoDisplayUpdate: () => {
						a.updateDisplay()
					},
					dispatchEvent: h,
					gianInitiative: function () {
						n = 1 - n
					}
				}
			})();
			function K(e, a, t) {
				return null == a[0].Name && e[0].push(t),
				null == a[1].Name && e[1].push(t),
				e
			}
			function z(e, a, t, n, r, s, d = !0, c = !0) {
				let l = u.lanes[e].cards[t][a],
				o = u.lanes[n].cards[s][r];
				if (d) {
					let i = new CustomEvent("whenAttacking", {
							detail: {
								lane: e,
								card: t,
								player: a
							}
						});
					l.div.dispatchEvent(i),
					l.updateDisplay(),
					"Hero" == l.CardType && (l.Accessory && (l.Accessory.div.dispatchEvent(i), l.Accessory.updateDisplay()), l.Armor && (l.Armor.div.dispatchEvent(i), l.Armor.updateDisplay()), l.Weapon && (l.Weapon.div.dispatchEvent(i), l.Weapon.updateDisplay())),
					i.detail.lane = n,
					i.detail.card = s,
					i.detail.player = r,
					o.div.dispatchEvent(i),
					o.updateDisplay(),
					"Hero" == o.CardType && (o.Accessory && (o.Accessory.div.dispatchEvent(i), o.Accessory.updateDisplay()), o.Armor && (o.Armor.div.dispatchEvent(i), o.Armor.updateDisplay()), o.Weapon && (o.Weapon.div.dispatchEvent(i), o.Weapon.updateDisplay()))
				}
				l.disarmed || (i(o.retaliate) > 0 && (l.currentHealth[0] -= i(o.retaliate) - i(l.currentArmor)), o.currentHealth[0] -= i(l.currentAttack) - i(o.currentArmor)),
				J.infoDisplayUpdate(),
				c && z(n, r, s, e, a, t, !1, !1)
			}
			const $ = ["Blood Rage", "Track", "Heartstopper Aura", "Kraken Shell", "Allseeing One's Favor", "Defend the Weak", "Juke", "Roseleaf Rejuvenator", "Champion of the Ancient", "Smeevil Blacksmith", "The Cover of Night", "Hip Fire", "Lodestone Demolition", "Oglodi Vandal", "Oglodi Catapult", "Friendly Fire", "Fog of War", "Arcane Assault", "Compel", "At Any Cost", "Whispers of Madness", "Cunning Plan", "Ventriloquy", "Diabolic Revelation", "The Omexe Arena", "Crippling Blow", "Clear The Deck", "Rend Armor", "Fight Through the Pain", "Cursed Satyr", "Stonehall Elite", "Smeevil Armsmaster", "Assassin's Shadow", "Pit Fighter of Quoidge", "Viscous Nasal Goo", "Ogre Corpse Tosser", "Murder Plot", "Collateral Damage", "Combat Training", "Pick a Fight", "Trebuchets", "Unsupervised Artillery", "Homefield Advantage", "Iron Fog Goldmine", "Assured Destruction", "Escape Route", "Howling Mind", "Grand Melee", "Assassinate", "Enchant Totem", "Winter's Curse", "Battlefield Control", "Gust", "Act of Defiance", "Frostbite", "Gank", "Duel", "Berserker's Call", "Prowler Vanguard", "Coup de Grace", "Mystic Flare", "Siege Units", "Barracks", "Moon Glaves", "Savage Wolf", "Fighting Instinct", "Thunderhide Pack", "New Orders", "Ion Shell", "Time of Triumph", "Forward Charge", "Altar of the Mad Moon", "New Orders", "Sister of the Veil", "Rebel Decoy", "Steam Cannon", "Keenfolk Turret", "Assassin's Apprentice", "Grazing Shot", "No Accident", "Slay", "Pick Off", "Selfish Cleric", "Revtel Convoy", "Ravenous Mass", "Rampaging Hellbear", "Satyr Duelist", "Savage Wolf", "Satyr Magician", "Disciple of Nevermore", "Legion Standard Bearer", "Mercenary Exiles", "Verdant Refuge", "Mist of Avernus", "Ignite", "Assault Ladders", "Mana Drain", "Payday", "Arcane Censure", "Stars Align", "Bellow", "Rumusque Blessing", "Defensive Bloom", "Restoration Effort", "Intimidation", "Curse of Atrophy", "Strafing Run", "Lightning Strike", "Rolling Storm", "Tower Barrage", "Foresight", "Prey on the Weak", "Remote Detonation", "Thunderstorm", "Poised to Strike", "Defensive Stance", "Overpower", "God's Strength", "Spring the Trap", "Double Edge", "Conflagration", "Call the Reserves", "Better Late Than Never", "Iron Branch Protection", "Avernus' Blessing", "Dimensional Portal", "Bronze Legionnaire", "Marrowfell Brawler", "Ogre Conscript", "Troll Soothsayer", "Untested Grunt", "Thunderhide Alpha"];
			let j,
			X = ["Blood Rage", "Track", "Heartstopper Aura", "Kraken Shell", "Allseeing One's Favor", "Defend the Weak", "Roseleaf Rejuvenator", "Champion of the Ancient", "Smeevil Blacksmith", "Hip Fire", "Oglodi Vandal", "Oglodi Catapult", "Fog of War", "Arcane Assault", "The Omexe Arena", "Crippling Blow", "Clear The Deck", "Fight Through the Pain", "Cursed Satyr", "Stonehall Elite", "Smeevil Armsmaster", "Assassin's Shadow", "Pit Fighter of Quoidge", "Viscous Nasal Goo", "Ogre Corpse Tosser", "Collateral Damage", "Combat Training", "Trebuchets", "Homefield Advantage", "Iron Fog Goldmine", "Payday", "Assured Destruction", "Howling Mind", "Assassinate", "Enchant Totem", "Winter's Curse", "Gust", "Act of Defiance", "Frostbite", "Berserker's Call", "Prowler Vanguard", "Coup de Grace", "Mystic Flare", "Siege Units", "Barracks", "Thunderhide Pack", "Altar of the Mad Moon", "Time of Triumph", "Forward Charge", "Ion Shell", "Sister of the Veil", "Rebel Decoy", "Assassin's Apprentice", "Grazing Shot", "No Accident", "Slay", "Pick Off", "Selfish Cleric", "Revtel Convoy", "Ravenous Mass", "Rampaging Hellbear", "Satyr Duelist", "Savage Wolf", "Satyr Magician", "Disciple of Nevermore", "Legion Standard Bearer", "Mercenary Exiles", "Verdant Refuge", "Mist of Avernus", "Ignite", "Assault Ladders", "Mana Drain", "Arcane Censure", "Stars Align", "Bellow", "Rumusque Blessing", "Defensive Bloom", "Restoration Effort", "Intimidation", "Curse of Atrophy", "Strafing Run", "Lightning Strike", "Rolling Storm", "Tower Barrage", "Foresight", "Prey on the Weak", "Remote Detonation", "Thunderstorm", "Poised to Strike", "Defensive Stance", "Overpower", "God's Strength", "Spring the Trap", "Double Edge", "Conflagration", "Call the Reserves", "Better Late Than Never", "Iron Branch Protection", "Avernus' Blessing", "Dimensional Portal", "Bronze Legionnaire", "Marrowfell Brawler", "Ogre Conscript", "Troll Soothsayer", "Untested Grunt", "Thunderhide Alpha"],
			Y = ["Bloodseeker", "Necrophos", "Bristleback", "J'Muy the Wise", "Legion Commander", "Lycan", "Centaur Warrunner", "Drow Ranger", "Sorla Khan", "Phantom Assassin", "Bounty Hunter", "Venomancer", "Prellex", "Sven", "Luna", "Treant Protector", "Enchantress", "Debbi the Cunning", "Keefe the Bold", "Fahrvhan the Dreamer", "Axe"];
			Y = n(Y).slice(0, 5);
			let Z,
			Q,
			ee = ["Legion Commander", "Lycan", "Winter Wyvern", "Skywrath Mage", "Centaur Warrunner", "Bloodseeker", "Necrophos", "Tidehunter", "Bristleback", "Earthshaker", "Omniknight", "Drow Ranger", "Sorla Khan", "Phantom Assassin", "Lion", "Lich", "Bounty Hunter", "Venomancer", "Prellex", "Pugna", "Sven", "Luna", "Treant Protector", "Enchantress", "Debbi the Cunning", "Keefe the Bold", "Sniper", "Fahrvhan the Dreamer", "J'Muy the Wise", "Axe"],
			ae = ["Rumusque Vestments", "Wingfall Hammer", "Blink Dagger", "Broadsword", "Claymore", "Chainmail", "Fur-lined Mantle", "Hero's Cape", "Platemail", "Barbed Mail", "Demagicking Maul", "Stonehall Plate", "Stonehall Cloak", "Leather Armor", "Short Sword", "Traveler's Cloak", "Blade of the Vigil", "Keenfolk Musket", "Red Mist Maul", "Shield of Basilius", "Horn of the Alpha", "Phase Boots", "Ring of Tarrasque"];
			const te = document.getElementById("start-game-btn"),
			ne = document.getElementById("deck-textarea"),
			ie = document.getElementById("item-textarea"),
			re = document.getElementById("heroes-textarea"),
			se = document.getElementById("deck-game-btn"),
			de = document.getElementById("item-game-btn"),
			ce = document.getElementById("heroes-game-btn"),
			le = document.getElementById("start-screen"),
			oe = document.getElementById("deck-options"),
			me = document.getElementById("item-options"),
			fe = document.getElementById("heroes-options"),
			pe = document.getElementById("deck-reset-btn"),
			ge = document.getElementById("deck-3of"),
			_e = document.getElementById("item-reset-btn"),
			he = document.getElementById("heroes-reset-btn"),
			ue = document.getElementById("heroes-shuffle-btn"),
			be = document.getElementById("import-game-btn"),
			ye = document.getElementById("other-game-btn"),
			ke = document.getElementById("other-options"),
			ve = document.getElementById("tower-handicap"),
			Ce = document.getElementById("mana-handicap"),
			Ae = document.getElementById("gold-handicap"),
			we = document.getElementById("refresh-btn");
			se.title = "If card is not vaild or implemented it will be ignored",
			ce.title = "Uses the 1st 5 heroes",
			ne.value = localStorage.getItem("deck"),
			ne.value = ne.value || $,
			ne.placeholder = "  If empty all cards will be added to your deck.",
			ge.checked = null == localStorage.getItem("3of") || "true" == localStorage.getItem("3of"),
			ne.title = "adds 3 of each listed card",
			re.value = localStorage.getItem("heroes"),
			re.value = re.value || ee,
			re.placeholder = "  If empty your heroes will be Legion Commander, Lycan, Winter Wyvern, Skywrath Mage, Centaur Warrunner",
			ie.value = localStorage.getItem("item"),
			ie.value = ie.value || ae,
			ie.placeholder = "  If empty all items will be added to your item deck.",
			Ae.value = localStorage.getItem("goldHandicap") || 0,
			Ce.value = localStorage.getItem("manaHandicap") || 0,
			ve.value = localStorage.getItem("towerHandicap") || 0,
			te.disabled = !0;
			setTimeout(function () {
				te.disabled = !1
			}, 500),
			te.addEventListener("click", function () {
				X = X.filter(function (e) {
						let a = V.Cards.find(function (a) {
								return a.Name == e
							}).Color;
						return Y.map(function (e) {
							return V.Cards.find(function (a) {
								return a.Name == e
							}).Color
						}).includes(a)
					}),
				(Z = (Z = (Z = re.value.split(",")).map(function (e) {
							return e.trim()
						})).filter(function (e) {
						return ee.includes(e)
					})).length < 5 && (Z = ee),
				localStorage.setItem("heroes", Z),
				Z.length > 5 && (Z = Z.slice(0, 5)),
				(j = (j = (j = (j = ne.value.split(",")).map(function (e) {
								return e.trim()
							})).filter(function (e) {
							return $.includes(e)
						})).filter(function (e) {
						let a = V.Cards.find(function (a) {
								return a.Name == e
							}).Color;
						return Z.map(function (e) {
							return V.Cards.find(function (a) {
								return a.Name == e
							}).Color
						}).includes(a)
					})).length || (j = (j = $).filter(function (e) {
						let a = V.Cards.find(function (a) {
								return a.Name == e
							}).Color;
						return Z.map(function (e) {
							return V.Cards.find(function (a) {
								return a.Name == e
							}).Color
						}).includes(a)
					})),
				localStorage.setItem("deck", j),
				localStorage.setItem("3of", ge.checked),
				ge.checked && (j = j.concat(j, j)),
				(Q = (Q = (Q = ie.value.split(",")).map(function (e) {
							return e.trim()
						})).filter(function (e) {
						return ae.includes(e)
					})).length < 9 && (Q = ae),
				localStorage.setItem("item", Q),
				X = X.concat(X, X),
				le.parentNode.removeChild(le),
				we.disabled = !1,
				J.startGame(),
				J.players[1].gold += parseInt(Ae.value),
				localStorage.setItem("goldHandicap", Ae.value),
				J.infoDisplayUpdate(),
				0 == Ce.value && 0 == ve.value || u.lanes.forEach(function (e) {
					e.towers[1].mana[0] += parseInt(Ce.value),
					ve.value > 0 ? e.towers[1].currentHealth[0] += parseInt(ve.value) : e.towers[0].currentHealth[0] += parseInt(ve.value),
					e.towers[1].updateDisplay(),
					e.towers[0].updateDisplay(),
					localStorage.setItem("manaHandicap", Ce.value),
					localStorage.setItem("towerHandicap", ve.value)
				})
			}),
			se.addEventListener("click", function () {
				ne.classList.toggle("display-none"),
				ie.classList.add("display-none"),
				re.classList.add("display-none"),
				oe.classList.toggle("display-none"),
				me.classList.add("display-none"),
				fe.classList.add("display-none"),
				ke.classList.add("display-none")
			}),
			de.addEventListener("click", function () {
				ie.classList.toggle("display-none"),
				ne.classList.add("display-none"),
				re.classList.add("display-none"),
				me.classList.toggle("display-none"),
				fe.classList.add("display-none"),
				oe.classList.add("display-none"),
				ke.classList.add("display-none")
			}),
			ce.addEventListener("click", function () {
				re.classList.toggle("display-none"),
				ne.classList.add("display-none"),
				ie.classList.add("display-none"),
				fe.classList.toggle("display-none"),
				oe.classList.add("display-none"),
				me.classList.add("display-none"),
				ke.classList.add("display-none")
			}),
			ye.addEventListener("click", function () {
				re.classList.add("display-none"),
				ne.classList.add("display-none"),
				ie.classList.add("display-none"),
				fe.classList.add("display-none"),
				oe.classList.add("display-none"),
				me.classList.add("display-none"),
				ke.classList.toggle("display-none")
			}),
			pe.addEventListener("click", function () {
				ne.value = $
			}),
			_e.addEventListener("click", function () {
				ie.value = ae
			}),
			he.addEventListener("click", function () {
				re.value = ee
			}),
			ue.addEventListener("click", function () {
				re.value = n(re.value.split(","))
			}),
			we.title = "Makes sure everything is updated and you have at least one space to play a creep",
			we.addEventListener("click", function () {
				u.collapse(),
				u.lanes[J.getCurrentLane()].expand(),
				J.dispatchEvent("continuousRefresh")
			}),
			be.addEventListener("click", function () {
				let e = prompt("Enter Deck Code \nNot all cards impelmented, cards not impelmented will be ignored");
				if (e) {
					ge.checked = !1;
					let a = F.ParseDeck(e);
					ne.value = a.cards.map(function (e) {
							let a = G.card_set.card_list.find(function (a) {
									return a.card_id == e.id
								});
							(a = a || U.card_set.card_list.find(function (a) {
										return a.card_id == e.id
									})) && (a = a.card_name.english),
							a = [a];
							for (var t = 1; t < e.count; t++)
								a.push(a[0]);
							return a
						}).flat(),
					ie.value = ne.value,
					re.value = a.heroes.sort(function (e, a) {
							return e.turn - a.turn
						}).map(function (e) {
							let a = G.card_set.card_list.find(function (a) {
									return a.card_id == e.id
								});
							return (a = a || U.card_set.card_list.find(function (a) {
										return a.card_id == e.id
									})) && (a = a.card_name.english),
							a
						}),
					re.value.split(",").forEach(function (e) {
						let a;
						(e = V.Cards.find(function (a) {
									return a.Name == e
								})) && (a = V.Cards.find(function (a) {
									return a.Id == e.SignatureCard
								})),
						ne.value += "," + a.Name + "," + a.Name + "," + a.Name
					}),
					re.value += "," + re.value
				}
			})
		}
	]);

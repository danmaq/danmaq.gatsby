'use strict';

import React from 'react';
import Link from 'gatsby-link';
import { Image, Nav, Navbar, NavbarBrand, NavItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import logonInv from '~/src/assets/logo/logoInv.svg';

/** Common header component. */
export default () =>
<div>
    <Navbar collapseOnSelect fixedTop inverse staticTop>
        <Navbar.Header>
            <Link className="pull-left" to="/">
                <Image alt="danmaq" src={logonInv} width="282" height="100" />
            </Link>
            <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
            <Nav>
                <NavItem eventKey={1} href="#works">Works</NavItem>
                <NavItem eventKey={2} href="#about">About</NavItem>
                <NavItem eventKey={3} href="#contact">Contact</NavItem>
                <NavItem eventKey={4} href="#blog">Blog</NavItem>
            </Nav>
            <Nav pullRight>
                <NavItem eventKey={5}
                         href="https://github.com/danmaq"
                         target="_blank">
                    <FontAwesome name="github"
                                 size="2x"
                                 fixedWidth
                                 inverse />
                </NavItem>
                <NavItem eventKey={6}
                         href="https://twitter.com/danmaq"
                         target="_blank">
                    <FontAwesome name="twitter"
                                 size="2x"
                                 fixedWidth
                                 inverse />
                </NavItem>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
</div>;